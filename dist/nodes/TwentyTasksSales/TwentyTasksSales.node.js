"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyTasksSales = void 0;
const zod_1 = require("zod");
const GenericFunctions_1 = require("../Twenty/GenericFunctions");
const tasksSalesResourceEnum = zod_1.z.enum(['opportunity', 'task', 'note', 'taskTarget', 'noteTarget']);
const createSchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to create'),
    operation: zod_1.z.literal('create').describe('Create a new record'),
    data: zod_1.z.record(zod_1.z.any()).describe('Record data as JSON object with the fields to create'),
});
const createManySchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to create multiple records for'),
    operation: zod_1.z.literal('createMany').describe('Create multiple records in batch'),
    data: zod_1.z.array(zod_1.z.record(zod_1.z.any())).describe('Array of record data objects to create'),
});
const updateSchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to update'),
    operation: zod_1.z.literal('update').describe('Update an existing record'),
    id: zod_1.z.string().describe('The unique ID of the record to update'),
    data: zod_1.z.record(zod_1.z.any()).describe('Record data as JSON object with the fields to update'),
});
const getSchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to retrieve'),
    operation: zod_1.z.literal('get').describe('Get a single record by ID'),
    id: zod_1.z.string().describe('The unique ID of the record to retrieve'),
});
const getManySchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to query'),
    operation: zod_1.z.literal('getMany').describe('Query multiple records with filtering and sorting'),
    limit: zod_1.z.number().min(1).max(100).optional().describe('Maximum number of records to return (1-100, default: 50)'),
    filter: zod_1.z.record(zod_1.z.any()).optional().describe('Filter conditions as JSON object'),
});
const deleteSchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to delete from'),
    operation: zod_1.z.literal('delete').describe('Delete a record by ID'),
    id: zod_1.z.string().describe('The unique ID of the record to delete'),
});
const inputSchema = zod_1.z.discriminatedUnion('operation', [
    createSchema,
    createManySchema,
    updateSchema,
    getSchema,
    getManySchema,
    deleteSchema,
]);
class TwentyTasksSales {
    constructor() {
        this.description = {
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
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const resource = this.getNodeParameter('resource', i);
                const operation = this.getNodeParameter('operation', i);
                let responseData = {};
                let endpoint = '';
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
exports.TwentyTasksSales = TwentyTasksSales;
//# sourceMappingURL=TwentyTasksSales.node.js.map