"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyCommunications = void 0;
const zod_1 = require("zod");
const GenericFunctions_1 = require("../Twenty/GenericFunctions");
const communicationsResourceEnum = zod_1.z.enum([
    'message',
    'messageThread',
    'messageChannel',
    'calendarEvent',
    'calendarChannel',
    'timelineActivity'
]);
const createSchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to create'),
    operation: zod_1.z.literal('create').describe('Create a new record'),
    data: zod_1.z.record(zod_1.z.any()).describe('Record data as JSON object with the fields to create'),
});
const createManySchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to create multiple records for'),
    operation: zod_1.z.literal('createMany').describe('Create multiple records in batch'),
    data: zod_1.z.array(zod_1.z.record(zod_1.z.any())).describe('Array of record data objects to create'),
});
const updateSchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to update'),
    operation: zod_1.z.literal('update').describe('Update an existing record'),
    id: zod_1.z.string().describe('The unique ID of the record to update'),
    data: zod_1.z.record(zod_1.z.any()).describe('Record data as JSON object with the fields to update'),
});
const getSchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to retrieve'),
    operation: zod_1.z.literal('get').describe('Get a single record by ID'),
    id: zod_1.z.string().describe('The unique ID of the record to retrieve'),
});
const getManySchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to query'),
    operation: zod_1.z.literal('getMany').describe('Query multiple records with filtering and sorting'),
    limit: zod_1.z.number().min(1).max(100).optional().describe('Maximum number of records to return (1-100, default: 50)'),
    filter: zod_1.z.record(zod_1.z.any()).optional().describe('Filter conditions as JSON object'),
});
const deleteSchema = zod_1.z.object({
    resource: communicationsResourceEnum.describe('The communications resource type to delete from'),
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
class TwentyCommunications {
    constructor() {
        this.description = {
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
exports.TwentyCommunications = TwentyCommunications;
//# sourceMappingURL=TwentyCommunications.node.js.map