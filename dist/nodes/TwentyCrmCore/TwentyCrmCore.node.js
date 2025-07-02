"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyCrmCore = void 0;
const zod_1 = require("zod");
const GenericFunctions_1 = require("../Twenty/GenericFunctions");
const ResourceDiscovery_1 = require("../Twenty/ResourceDiscovery");
const operationEnum = zod_1.z.enum(['create', 'createMany', 'update', 'get', 'getMany', 'delete']);
const inputSchema = zod_1.z.object({
    resource: zod_1.z.string().describe('The CRM resource type to operate on (e.g., companies, people, attachments)'),
    operation: operationEnum.describe('The operation to perform: create, createMany, update, get, getMany, or delete'),
    id: zod_1.z.string().optional().describe('The unique ID of the record (required for get, update, delete operations)'),
    data: zod_1.z.union([zod_1.z.record(zod_1.z.any()), zod_1.z.array(zod_1.z.record(zod_1.z.any()))]).optional().describe('Record data as JSON object or array of objects (required for create, update, createMany operations)'),
    limit: zod_1.z.number().min(1).max(100).optional().describe('Maximum number of records to return for getMany (1-100, default: 50)'),
    filter: zod_1.z.record(zod_1.z.any()).optional().describe('Filter conditions as JSON object for getMany operation'),
});
class TwentyCrmCore {
    constructor() {
        this.description = {
            displayName: 'Twenty CRM Core',
            name: 'twentyCrmCore',
            icon: 'file:twenty.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Manage core CRM entities: companies, contacts, relationships, and attachments. Perfect for AI agents to handle customer data, contact management, and business relationship tracking with full CRUD operations. Resources are automatically discovered from your Twenty CRM instance.',
            usableAsTool: true,
            schema: inputSchema,
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
        this.methods = {
            listSearch: {
                async searchResources() {
                    try {
                        const resources = await ResourceDiscovery_1.ResourceDiscovery.discoverResourcesByCategory(this, 'crm');
                        const results = resources.map(resource => ({
                            name: resource.name,
                            value: resource.value,
                            description: resource.description,
                        }));
                        return { results };
                    }
                    catch (error) {
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
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const resourceLocator = this.getNodeParameter('resource', i);
                const operation = this.getNodeParameter('operation', i);
                const resource = resourceLocator.value || resourceLocator;
                if (!resource) {
                    throw new Error('Resource is required');
                }
                let responseData = {};
                const endpoint = `/${resource}`;
                switch (operation) {
                    case 'create':
                        const createData = this.getNodeParameter('data', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, { data: createData });
                        break;
                    case 'createMany':
                        const batchData = this.getNodeParameter('data', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', `${endpoint}/batch`, { data: batchData });
                        break;
                    case 'update':
                        const updateId = this.getNodeParameter('id', i);
                        const updateData = this.getNodeParameter('data', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `${endpoint}/${updateId}`, { data: updateData });
                        break;
                    case 'get':
                        const getId = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `${endpoint}/${getId}`);
                        break;
                    case 'getMany':
                        const limit = this.getNodeParameter('limit', i, 50);
                        const filter = this.getNodeParameter('filter', i, '{}');
                        let queryString = `limit=${limit}`;
                        if (filter !== '{}')
                            queryString += `&filter=${encodeURIComponent(filter)}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `${endpoint}?${queryString}`);
                        break;
                    case 'delete':
                        const deleteId = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `${endpoint}/${deleteId}`);
                        break;
                    default:
                        throw new Error(`Unknown operation: ${operation}`);
                }
                const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
                returnData.push(...executionData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray({ error: error.message }), { itemData: { item: i } });
                    returnData.push(...executionData);
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.TwentyCrmCore = TwentyCrmCore;
//# sourceMappingURL=TwentyCrmCore.node.js.map