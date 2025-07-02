"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyTasksSales = void 0;
const zod_1 = require("zod");
const GenericFunctions_1 = require("../Twenty/GenericFunctions");
const tasksSalesResourceEnum = zod_1.z.enum(['opportunity', 'task', 'note', 'taskTarget', 'noteTarget']);
const operationEnum = zod_1.z.enum(['create', 'createMany', 'update', 'get', 'getMany', 'delete']);
const opportunitySchema = zod_1.z.object({
    name: zod_1.z.string().describe('Opportunity name'),
    amount: zod_1.z.number().optional().describe('Deal amount/value'),
    stage: zod_1.z.string().optional().describe('Sales stage (e.g., PROSPECTING, MEETING, PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST)'),
    probability: zod_1.z.number().min(0).max(100).optional().describe('Win probability percentage (0-100)'),
    expectedCloseDate: zod_1.z.string().optional().describe('Expected close date (ISO format)'),
    description: zod_1.z.string().optional().describe('Opportunity description'),
    companyId: zod_1.z.string().optional().describe('Associated company ID'),
    personId: zod_1.z.string().optional().describe('Associated person/contact ID'),
    ownerId: zod_1.z.string().optional().describe('Opportunity owner/responsible person ID'),
}).describe('Opportunity/deal record data');
const taskSchema = zod_1.z.object({
    title: zod_1.z.string().describe('Task title'),
    body: zod_1.z.string().optional().describe('Task description/body'),
    status: zod_1.z.string().optional().describe('Task status (e.g., TODO, IN_PROGRESS, DONE)'),
    dueAt: zod_1.z.string().optional().describe('Due date/time (ISO format)'),
    assigneeId: zod_1.z.string().optional().describe('Assigned person ID'),
    authorId: zod_1.z.string().optional().describe('Task creator ID'),
    position: zod_1.z.number().optional().describe('Task position/order'),
}).describe('Task record data');
const noteSchema = zod_1.z.object({
    title: zod_1.z.string().describe('Note title'),
    body: zod_1.z.string().optional().describe('Note content/body'),
    authorId: zod_1.z.string().optional().describe('Note author ID'),
    position: zod_1.z.number().optional().describe('Note position/order'),
}).describe('Note record data');
const targetSchema = zod_1.z.object({
    targetId: zod_1.z.string().describe('Target entity ID'),
    taskId: zod_1.z.string().optional().describe('Associated task ID (for taskTarget)'),
    noteId: zod_1.z.string().optional().describe('Associated note ID (for noteTarget)'),
}).describe('Target association data');
const dataSchema = zod_1.z.union([
    opportunitySchema,
    taskSchema,
    noteSchema,
    targetSchema,
    zod_1.z.array(zod_1.z.union([opportunitySchema, taskSchema, noteSchema, targetSchema]))
]).optional().describe('Record data - structure varies by resource type');
const inputSchema = zod_1.z.object({
    resource: tasksSalesResourceEnum.describe('The tasks/sales resource type to operate on'),
    operation: operationEnum.describe('The operation to perform: create, createMany, update, get, getMany, or delete'),
    id: zod_1.z.string().optional().describe('The unique ID of the record (required for get, update, delete operations)'),
    data: dataSchema,
    limit: zod_1.z.number().min(1).max(100).optional().describe('Maximum number of records to return for getMany (1-100, default: 50)'),
    filter: zod_1.z.record(zod_1.z.any()).optional().describe('Filter conditions as JSON object for getMany operation'),
});
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