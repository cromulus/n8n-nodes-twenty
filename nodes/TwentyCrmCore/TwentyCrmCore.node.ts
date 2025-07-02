import type {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	ILoadOptionsFunctions,
	INodeListSearchItems,
	INodeListSearchResult,
} from 'n8n-workflow';

import { twentyApiRequest } from '../Twenty/GenericFunctions';
import { ResourceDiscovery } from '../Twenty/ResourceDiscovery';

export class TwentyCrmCore implements INodeType {
	description: INodeTypeDescription & { usableAsTool?: boolean } = {
		displayName: 'Twenty CRM Core',
		name: 'twentyCrmCore',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage core CRM entities: companies, contacts, relationships, and attachments. Perfect for AI agents to handle customer data, contact management, and business relationship tracking with full CRUD operations. Resources are automatically discovered from your Twenty CRM instance.',
		usableAsTool: true,
		defaults: {
			name: 'Twenty CRM Core',
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
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
				description: 'The CRM resource to operate on (automatically discovered from your Twenty instance)',
				modes: [
					{
						displayName: 'From List',
						name: 'list',
						type: 'list',
						placeholder: 'Select a resource...',
						typeOptions: {
							searchListMethod: 'searchResources',
							searchable: true,
						},
					},
					{
						displayName: 'By Name',
						name: 'name',
						type: 'string',
						placeholder: 'e.g. companies',
						validation: [
							{
								type: 'regex',
								properties: {
									regex: '^[a-zA-Z][a-zA-Z0-9]*$',
									errorMessage: 'Resource name must be alphanumeric and start with a letter',
								},
							},
						],
					},
				],
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
				description: 'Record data in JSON format. The structure depends on the selected resource.',
				placeholder: '{\n  "name": "Company Name",\n  "domainName": "example.com"\n}',
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
				placeholder: '{\n  "name": {\n    "like": "%company%"\n  }\n}',
			},
		],
	};

	methods = {
		listSearch: {
			async searchResources(
				this: ILoadOptionsFunctions,
			): Promise<INodeListSearchResult> {
				try {
					const resources = await ResourceDiscovery.discoverResourcesByCategory(this as any, 'crm');
					
					const results: INodeListSearchItems[] = resources.map(resource => ({
						name: resource.name,
						value: resource.value,
						description: resource.description,
					}));

					return { results };
				} catch (error) {
					// Return fallback resources for CRM
					const fallbackResources = [
						{ name: 'Companies', value: 'companies', description: 'Manage company records - core CRM entities' },
						{ name: 'People', value: 'people', description: 'Manage people records - core CRM entities' },
						{ name: 'Relationships', value: 'relationships', description: 'Manage relationships records - core CRM entities' },
						{ name: 'Attachments', value: 'attachments', description: 'Manage attachments records - core CRM entities' },
					];
					
					return { results: fallbackResources };
				}
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const resourceLocator = this.getNodeParameter('resource', i) as any;
				const operation = this.getNodeParameter('operation', i) as string;
				
				// Extract resource name from locator
				const resource = resourceLocator.value || resourceLocator;
				
				if (!resource) {
					throw new Error('Resource is required');
				}

				let responseData: IDataObject | IDataObject[] = {};
				const endpoint = `/${resource}`;

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
						const limit = this.getNodeParameter('limit', i, 20) as number;
						const filter = this.getNodeParameter('filter', i, '{}') as string;
						
						const queryParams = new URLSearchParams();
						queryParams.append('limit', limit.toString());
						if (filter !== '{}') queryParams.append('filter', filter);
						
						responseData = await twentyApiRequest.call(this, 'GET', `${endpoint}?${queryParams.toString()}`);
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