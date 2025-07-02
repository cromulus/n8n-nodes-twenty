import type {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { twentyApiRequest } from '../Twenty/GenericFunctions';

// JSON Schema for AI Tool input validation (n8n expects JSON Schema, not Zod)
const opportunitySchema = {
	type: 'object',
	properties: {
		name: { type: 'string', description: 'Opportunity name' },
		amount: { type: 'number', description: 'Deal amount/value' },
		stage: { type: 'string', description: 'Sales stage (e.g., PROSPECTING, MEETING, PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST)' },
		probability: { type: 'number', minimum: 0, maximum: 100, description: 'Win probability percentage (0-100)' },
		expectedCloseDate: { type: 'string', description: 'Expected close date (ISO format)' },
		description: { type: 'string', description: 'Opportunity description' },
		companyId: { type: 'string', description: 'Associated company ID' },
		personId: { type: 'string', description: 'Associated person/contact ID' },
		ownerId: { type: 'string', description: 'Opportunity owner/responsible person ID' }
	},
	required: ['name'],
	additionalProperties: false
};

const taskSchema = {
	type: 'object',
	properties: {
		title: { type: 'string', description: 'Task title' },
		body: { type: 'string', description: 'Task description/body' },
		status: { type: 'string', description: 'Task status (e.g., TODO, IN_PROGRESS, DONE)' },
		dueAt: { type: 'string', description: 'Due date/time (ISO format)' },
		assigneeId: { type: 'string', description: 'Assigned person ID' },
		authorId: { type: 'string', description: 'Task creator ID' },
		position: { type: 'number', description: 'Task position/order' }
	},
	required: ['title'],
	additionalProperties: false
};

const noteSchema = {
	type: 'object',
	properties: {
		title: { type: 'string', description: 'Note title' },
		body: { type: 'string', description: 'Note content/body' },
		authorId: { type: 'string', description: 'Note author ID' },
		position: { type: 'number', description: 'Note position/order' }
	},
	required: ['title'],
	additionalProperties: false
};

const targetSchema = {
	type: 'object',
	properties: {
		targetId: { type: 'string', description: 'Target entity ID' },
		taskId: { type: 'string', description: 'Associated task ID (for taskTarget)' },
		noteId: { type: 'string', description: 'Associated note ID (for noteTarget)' }
	},
	required: ['targetId'],
	additionalProperties: false
};

const inputSchema = {
	type: 'object',
	properties: {
		resource: {
			type: 'string',
			enum: ['opportunity', 'task', 'note', 'taskTarget', 'noteTarget'],
			description: 'The tasks/sales resource type to operate on'
		},
		operation: {
			type: 'string',
			enum: ['create', 'createMany', 'update', 'get', 'getMany', 'delete'],
			description: 'The operation to perform: create, createMany, update, get, getMany, or delete'
		},
		id: {
			type: 'string',
			description: 'The unique ID of the record (required for get, update, delete operations)'
		},
		data: {
			oneOf: [
				opportunitySchema,
				taskSchema,
				noteSchema,
				targetSchema,
				{
					type: 'array',
					items: {
						oneOf: [opportunitySchema, taskSchema, noteSchema, targetSchema]
					}
				}
			],
			description: 'Record data - structure varies by resource type'
		},
		limit: {
			type: 'number',
			minimum: 1,
			maximum: 100,
			description: 'Maximum number of records to return for getMany (1-100, default: 50)'
		},
		filter: {
			type: 'object',
			description: 'Filter conditions as JSON object for getMany operation'
		}
	},
	required: ['resource', 'operation'],
	additionalProperties: false
};

export class TwentyTasksSales implements INodeType {
	description: INodeTypeDescription & { usableAsTool?: boolean; schema?: any } = {
		displayName: 'Twenty Tasks & Sales',
		name: 'twentyTasksSales',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage sales pipeline and task management: opportunities, tasks, notes, and targets. Ideal for AI agents handling deal tracking, task automation, and sales activity management with full CRUD operations.',
		usableAsTool: true,
		schema: inputSchema,
		defaults: {
			name: 'Twenty Tasks & Sales',
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
						name: 'Opportunity',
						value: 'opportunity',
						description: 'Manage sales opportunities and deals in your pipeline',
					},
					{
						name: 'Task',
						value: 'task',
						description: 'Manage tasks and to-do items',
					},
					{
						name: 'Note',
						value: 'note',
						description: 'Manage notes and documentation',
					},
					{
						name: 'Task Target',
						value: 'taskTarget',
						description: 'Manage task associations with other entities',
					},
					{
						name: 'Note Target',
						value: 'noteTarget',
						description: 'Manage note associations with other entities',
					},
				],
				default: 'opportunity',
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
					case 'opportunity':
						endpoint = '/opportunities';
						break;
					case 'task':
						endpoint = '/tasks';
						break;
					case 'note':
						endpoint = '/notes';
						break;
					case 'taskTarget':
						endpoint = '/taskTargets';
						break;
					case 'noteTarget':
						endpoint = '/noteTargets';
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
