import type {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { z } from 'zod';

import { twentyApiRequest } from '../Twenty/GenericFunctions';

// Zod schemas for AI Tool input validation - Communications
const communicationsResourceEnum = z.enum([
	'message',
	'messageThread',
	'messageChannel',
	'calendarEvent',
	'calendarChannel',
	'timelineActivity'
]);

const createSchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to create'),
	operation: z.literal('create').describe('Create a new record'),
	data: z.record(z.any()).describe('Record data as JSON object with the fields to create'),
});

const createManySchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to create multiple records for'),
	operation: z.literal('createMany').describe('Create multiple records in batch'),
	data: z.array(z.record(z.any())).describe('Array of record data objects to create'),
});

const updateSchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to update'),
	operation: z.literal('update').describe('Update an existing record'),
	id: z.string().describe('The unique ID of the record to update'),
	data: z.record(z.any()).describe('Record data as JSON object with the fields to update'),
});

const getSchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to retrieve'),
	operation: z.literal('get').describe('Get a single record by ID'),
	id: z.string().describe('The unique ID of the record to retrieve'),
});

const getManySchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to query'),
	operation: z.literal('getMany').describe('Query multiple records with filtering and sorting'),
	limit: z.number().min(1).max(100).optional().describe('Maximum number of records to return (1-100, default: 50)'),
	filter: z.record(z.any()).optional().describe('Filter conditions as JSON object'),
});

const deleteSchema = z.object({
	resource: communicationsResourceEnum.describe('The communications resource type to delete from'),
	operation: z.literal('delete').describe('Delete a record by ID'),
	id: z.string().describe('The unique ID of the record to delete'),
});

// Union schema for Communications operations
const inputSchema = z.discriminatedUnion('operation', [
	createSchema,
	createManySchema,
	updateSchema,
	getSchema,
	getManySchema,
	deleteSchema,
]);

export class TwentyCommunications implements INodeType {
	description: INodeTypeDescription & { usableAsTool?: boolean; schema?: any } = {
		displayName: 'Twenty Communications',
		name: 'twentyCommunications',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Handle all communications: messages, email threads, calendar events, and timeline activities. Perfect for AI agents managing customer communications, email automation, meeting scheduling, and activity tracking.',
		usableAsTool: true,
		schema: inputSchema,
		defaults: {
			name: 'Twenty Communications',
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
						name: 'Message',
						value: 'message',
						description: 'Manage email messages and communications',
					},
					{
						name: 'Message Thread',
						value: 'messageThread',
						description: 'Manage email conversation threads',
					},
					{
						name: 'Message Channel',
						value: 'messageChannel',
						description: 'Manage email channels and connections',
					},
					{
						name: 'Calendar Event',
						value: 'calendarEvent',
						description: 'Manage calendar events and meetings',
					},
					{
						name: 'Calendar Channel',
						value: 'calendarChannel',
						description: 'Manage calendar integrations and channels',
					},
					{
						name: 'Timeline Activity',
						value: 'timelineActivity',
						description: 'Manage activity timeline and history',
					},
				],
				default: 'message',
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
					case 'message':
						endpoint = '/messages';
						break;
					case 'messageThread':
						endpoint = '/messageThreads';
						break;
					case 'messageChannel':
						endpoint = '/messageChannels';
						break;
					case 'calendarEvent':
						endpoint = '/calendarEvents';
						break;
					case 'calendarChannel':
						endpoint = '/calendarChannels';
						break;
					case 'timelineActivity':
						endpoint = '/timelineActivities';
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
