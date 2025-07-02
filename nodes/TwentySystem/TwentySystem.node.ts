import type {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { z } from 'zod';

import { twentyApiRequest } from '../Twenty/GenericFunctions';

// Zod schemas for AI Tool input validation - System
const systemResourceEnum = z.enum([
	'workflow',
	'webhook',
	'apiKey',
	'view',
	'connectedAccount',
	'workspaceMember'
]);

const createSchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to create'),
	operation: z.literal('create').describe('Create a new record'),
	data: z.record(z.any()).describe('Record data as JSON object with the fields to create'),
});

const createManySchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to create multiple records for'),
	operation: z.literal('createMany').describe('Create multiple records in batch'),
	data: z.array(z.record(z.any())).describe('Array of record data objects to create'),
});

const updateSchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to update'),
	operation: z.literal('update').describe('Update an existing record'),
	id: z.string().describe('The unique ID of the record to update'),
	data: z.record(z.any()).describe('Record data as JSON object with the fields to update'),
});

const getSchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to retrieve'),
	operation: z.literal('get').describe('Get a single record by ID'),
	id: z.string().describe('The unique ID of the record to retrieve'),
});

const getManySchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to query'),
	operation: z.literal('getMany').describe('Query multiple records with filtering and sorting'),
	limit: z.number().min(1).max(100).optional().describe('Maximum number of records to return (1-100, default: 50)'),
	filter: z.record(z.any()).optional().describe('Filter conditions as JSON object'),
});

const deleteSchema = z.object({
	resource: systemResourceEnum.describe('The system resource type to delete from'),
	operation: z.literal('delete').describe('Delete a record by ID'),
	id: z.string().describe('The unique ID of the record to delete'),
});

// Union schema for System operations
const inputSchema = z.discriminatedUnion('operation', [
	createSchema,
	createManySchema,
	updateSchema,
	getSchema,
	getManySchema,
	deleteSchema,
]);

export class TwentySystem implements INodeType {
	description: INodeTypeDescription & { usableAsTool?: boolean; schema?: any } = {
		displayName: 'Twenty System',
		name: 'twentySystem',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage Twenty CRM system configuration: workflows, webhooks, API keys, views, and workspace settings. Perfect for AI agents handling automation setup, system integration, and administrative tasks.',
		usableAsTool: true,
		schema: inputSchema,
		defaults: {
			name: 'Twenty System',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'twentyApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Workflow',
						value: 'workflow',
						description: 'Manage automated workflows and business processes',
					},
					{
						name: 'Webhook',
						value: 'webhook',
						description: 'Manage webhook integrations and notifications',
					},
					{
						name: 'API Key',
						value: 'apiKey',
						description: 'Manage API keys and authentication tokens',
					},
					{
						name: 'View',
						value: 'view',
						description: 'Manage custom views and data displays',
					},
					{
						name: 'Connected Account',
						value: 'connectedAccount',
						description: 'Manage connected external accounts and integrations',
					},
					{
						name: 'Workspace Member',
						value: 'workspaceMember',
						description: 'Manage workspace users and permissions',
					},
				],
				default: 'workflow',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a new record',
						action: 'Create record',
					},
					{
						name: 'Create Many',
						value: 'createMany',
						description: 'Create multiple records in batch',
						action: 'Create many records',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update an existing record',
						action: 'Update record',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a record by ID',
						action: 'Get record',
					},
					{
						name: 'Get Many',
						value: 'getMany',
						description: 'Find multiple records with filtering and sorting',
						action: 'Get many records',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a record',
						action: 'Delete record',
					},
				],
				default: 'get',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				description: 'The ID of the record to operate on',
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'json',
				displayOptions: {
					show: {
						operation: ['create', 'update', 'createMany'],
					},
				},
				default: '{}',
				description: 'Record data in JSON format',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						operation: ['getMany'],
					},
				},
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 20,
				description: 'Maximum number of records to return',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'json',
				displayOptions: {
					show: {
						operation: ['getMany'],
					},
				},
				default: '{}',
				description: 'JSON filter object for querying records',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				let responseData: IDataObject | IDataObject[] = {};
				let endpoint = '';

				// Set endpoint based on resource
				switch (resource) {
					case 'workflow':
						endpoint = '/workflows';
						break;
					case 'webhook':
						endpoint = '/webhooks';
						break;
					case 'apiKey':
						endpoint = '/apiKeys';
						break;
					case 'view':
						endpoint = '/views';
						break;
					case 'connectedAccount':
						endpoint = '/connectedAccounts';
						break;
					case 'workspaceMember':
						endpoint = '/workspaceMembers';
						break;
					default:
						throw new Error(`Unknown resource: ${resource}`);
				}

				// Execute operation
				switch (operation) {
					case 'create':
						const createData = this.getNodeParameter('data', i) as IDataObject;
						responseData = await twentyApiRequest.call(this, 'POST', endpoint, { data: createData });
						break;

					case 'createMany':
						const batchData = this.getNodeParameter('data', i) as IDataObject[];
						responseData = await twentyApiRequest.call(this, 'POST', `${endpoint}/batch`, { data: batchData });
						break;

					case 'update':
						const updateId = this.getNodeParameter('id', i) as string;
						const updateData = this.getNodeParameter('data', i) as IDataObject;
						responseData = await twentyApiRequest.call(this, 'PATCH', `${endpoint}/${updateId}`, { data: updateData });
						break;

					case 'get':
						const getId = this.getNodeParameter('id', i) as string;
						responseData = await twentyApiRequest.call(this, 'GET', `${endpoint}/${getId}`);
						break;

										case 'getMany':
						const limit = this.getNodeParameter('limit', i, 50) as number;
						const filter = this.getNodeParameter('filter', i, '{}') as string;

						let queryString = `limit=${limit}`;
						if (filter !== '{}') queryString += `&filter=${encodeURIComponent(filter)}`;

						responseData = await twentyApiRequest.call(this, 'GET', `${endpoint}?${queryString}`);
						break;

					case 'delete':
						const deleteId = this.getNodeParameter('id', i) as string;
						responseData = await twentyApiRequest.call(this, 'DELETE', `${endpoint}/${deleteId}`);
						break;

					default:
						throw new Error(`Unknown operation: ${operation}`);
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const executionData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionData);
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
