"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyUniversal = void 0;
const GenericFunctions_1 = require("../Twenty/GenericFunctions");
const ResourceDiscovery_1 = require("../Twenty/ResourceDiscovery");
class TwentyUniversal {
    constructor() {
        this.description = {
            displayName: 'Twenty CRM Universal',
            name: 'twentyUniversal',
            icon: 'file:twenty.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Universal node for Twenty CRM - access ALL resources dynamically discovered from your instance. Perfect for AI agents with full CRUD operations on any Twenty CRM entity including companies, people, opportunities, tasks, messages, workflows, and more. Resources are automatically loaded from your Twenty API.',
            usableAsTool: true,
            defaults: {
                name: 'Twenty CRM Universal',
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
                    description: 'The resource to operate on - automatically discovered from your Twenty CRM instance',
                    modes: [
                        {
                            displayName: 'From List',
                            name: 'list',
                            type: 'list',
                            placeholder: 'Select a resource...',
                            typeOptions: {
                                searchListMethod: 'searchAllResources',
                                searchable: true,
                            },
                        },
                        {
                            displayName: 'By Name',
                            name: 'name',
                            type: 'string',
                            placeholder: 'e.g. companies, people, opportunities',
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
                            description: 'Update an existing record by ID',
                            action: 'Update record',
                        },
                        {
                            name: 'Get',
                            value: 'get',
                            description: 'Get a single record by ID',
                            action: 'Get record',
                        },
                        {
                            name: 'Get Many',
                            value: 'getMany',
                            description: 'Query multiple records with filtering and sorting',
                            action: 'Get many records',
                        },
                        {
                            name: 'Delete',
                            value: 'delete',
                            description: 'Delete a record by ID',
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
                    description: 'The unique ID of the record to operate on',
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
                    description: 'Record data in JSON format. The structure depends on the selected resource and operation.',
                    placeholder: '{\n  "name": "Example Name",\n  "description": "Example description"\n}',
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
                    description: 'Maximum number of records to return (1-100)',
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
                    description: 'JSON filter object for querying records. Use Twenty CRM filter syntax.',
                    placeholder: '{\n  "name": {\n    "like": "%search%"\n  },\n  "status": {\n    "eq": "ACTIVE"\n  }\n}',
                },
                {
                    displayName: 'Order By',
                    name: 'orderBy',
                    type: 'json',
                    displayOptions: {
                        show: {
                            operation: ['getMany'],
                        },
                    },
                    default: '{}',
                    description: 'JSON object for sorting results',
                    placeholder: '{\n  "createdAt": "DESC",\n  "name": "ASC"\n}',
                },
            ],
        };
        this.methods = {
            listSearch: {
                async searchAllResources() {
                    try {
                        const resources = await ResourceDiscovery_1.ResourceDiscovery.discoverResources(this);
                        const categorizedResults = [];
                        const categories = ['crm', 'tasks', 'communications', 'system'];
                        for (const category of categories) {
                            const categoryResources = resources.filter(r => r.category === category);
                            if (categoryResources.length > 0) {
                                const categoryName = {
                                    crm: 'CRM Core',
                                    tasks: 'Tasks & Sales',
                                    communications: 'Communications',
                                    system: 'System & Admin'
                                }[category];
                                categorizedResults.push({
                                    name: `━━━ ${categoryName} ━━━`,
                                    value: `__category_${category}`,
                                    description: '',
                                });
                                categoryResources.forEach(resource => {
                                    categorizedResults.push({
                                        name: resource.name,
                                        value: resource.value,
                                        description: resource.description,
                                    });
                                });
                            }
                        }
                        return { results: categorizedResults };
                    }
                    catch (error) {
                        const fallbackResources = [
                            { name: '━━━ CRM Core ━━━', value: '__category_crm', description: '' },
                            { name: 'Companies', value: 'companies', description: 'Manage company records and business entities' },
                            { name: 'People', value: 'people', description: 'Manage individual contacts and people' },
                            { name: 'Relationships', value: 'relationships', description: 'Manage relationships between entities' },
                            { name: 'Attachments', value: 'attachments', description: 'Manage files and documents' },
                            { name: '━━━ Tasks & Sales ━━━', value: '__category_tasks', description: '' },
                            { name: 'Opportunities', value: 'opportunities', description: 'Manage sales opportunities and deals' },
                            { name: 'Tasks', value: 'tasks', description: 'Manage tasks and to-do items' },
                            { name: 'Notes', value: 'notes', description: 'Manage notes and documentation' },
                            { name: '━━━ Communications ━━━', value: '__category_comms', description: '' },
                            { name: 'Messages', value: 'messages', description: 'Manage email messages and communications' },
                            { name: 'Message Threads', value: 'messageThreads', description: 'Manage email conversation threads' },
                            { name: 'Calendar Events', value: 'calendarEvents', description: 'Manage calendar events and meetings' },
                            { name: '━━━ System & Admin ━━━', value: '__category_system', description: '' },
                            { name: 'Workflows', value: 'workflows', description: 'Manage automated workflows and processes' },
                            { name: 'Webhooks', value: 'webhooks', description: 'Manage webhook integrations' },
                            { name: 'API Keys', value: 'apiKeys', description: 'Manage API keys and authentication' },
                            { name: 'Views', value: 'views', description: 'Manage custom views and displays' },
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
                if (!resource || resource.startsWith('__category_')) {
                    throw new Error('Please select a valid resource (not a category header)');
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
                        const limit = this.getNodeParameter('limit', i, 20);
                        const filter = this.getNodeParameter('filter', i, '{}');
                        const orderBy = this.getNodeParameter('orderBy', i, '{}');
                        const queryParams = new URLSearchParams();
                        queryParams.append('limit', limit.toString());
                        if (filter !== '{}')
                            queryParams.append('filter', filter);
                        if (orderBy !== '{}')
                            queryParams.append('orderBy', orderBy);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `${endpoint}?${queryParams.toString()}`);
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
exports.TwentyUniversal = TwentyUniversal;
//# sourceMappingURL=TwentyUniversal.node.js.map