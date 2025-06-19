"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twenty = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const descriptions_1 = require("./descriptions");
class Twenty {
    constructor() {
        this.description = {
            displayName: 'Twenty CRM',
            name: 'twenty',
            icon: 'file:twenty.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Comprehensive CRM operations for Twenty - manage companies, contacts, deals, tasks, notes, and more. Supports full CRUD operations with advanced filtering, sorting, and relationship management.',
            usableAsTool: true,
            defaults: {
                name: 'Twenty CRM',
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
                    description: 'Select the Twenty CRM resource type to perform operations on',
                    options: [
                        {
                            name: 'Api Key',
                            value: 'apiKey',
                            description: 'Manage API keys for authentication and access control',
                        },
                        {
                            name: 'Attachment',
                            value: 'attachment',
                            description: 'Manage file attachments - documents, images, and other files',
                        },
                        {
                            name: 'Audit Log',
                            value: 'auditLog',
                            description: 'Access audit logs - track changes and user activities for compliance',
                        },
                        {
                            name: 'Blocklist',
                            value: 'blocklist',
                            description: 'Manage blocked entities - prevent unwanted contacts or communications',
                        },
                        {
                            name: 'Calendar Channel',
                            value: 'calendarChannel',
                            description: 'Manage calendar integrations - connect external calendar systems',
                        },
                        {
                            name: 'Calendar Channel Event Association',
                            value: 'calendarChannelEventAssociation',
                            description: 'Manage associations between calendar channels and events',
                        },
                        {
                            name: 'Calendar Event',
                            value: 'calendarEvent',
                            description: 'Manage calendar events - meetings, appointments, and scheduled activities',
                        },
                        {
                            name: 'Calendar Event Participant',
                            value: 'calendarEventParticipant',
                            description: 'Manage event participants - attendees and their participation status',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                            description: 'Manage companies/organizations - create, read, update, delete, and find duplicates',
                        },
                        {
                            name: 'Connected Account',
                            value: 'connectedAccount',
                            description: 'Manage connected external accounts - email, calendar, and other integrations',
                        },
                        {
                            name: 'Favorite',
                            value: 'favorite',
                            description: 'Manage user favorites - bookmark important records for quick access',
                        },
                        {
                            name: 'General',
                            value: 'general',
                            description: 'General API operations like getting schema information',
                        },
                        {
                            name: 'Message',
                            value: 'message',
                            description: 'Manage messages and communications - emails, calls, and other interactions',
                        },
                        {
                            name: 'Message Channel',
                            value: 'messageChannel',
                            description: 'Manage message channels - email accounts and communication channels',
                        },
                        {
                            name: 'Message Channel Message Association',
                            value: 'messageChannelMessageAssociation',
                            description: 'Manage associations between message channels and messages',
                        },
                        {
                            name: 'Message Participant',
                            value: 'messageParticipant',
                            description: 'Manage message participants - recipients and senders in communications',
                        },
                        {
                            name: 'Message Thread',
                            value: 'messageThread',
                            description: 'Manage message threads - conversation chains and email threads',
                        },
                        {
                            name: 'Note',
                            value: 'note',
                            description: 'Manage notes and comments - add context and details to CRM records',
                        },
                        {
                            name: 'Note Target',
                            value: 'noteTarget',
                            description: 'Manage note associations - link notes to specific CRM records',
                        },
                        {
                            name: 'Opportunity',
                            value: 'opportunity',
                            description: 'Manage sales opportunities/deals - track potential sales through pipeline stages',
                        },
                        {
                            name: 'Person',
                            value: 'person',
                            description: 'Manage contacts/people - create, read, update, delete, and find duplicates',
                        },
                        {
                            name: 'Task',
                            value: 'task',
                            description: 'Manage tasks and to-dos - create, assign, and track completion status',
                        },
                        {
                            name: 'Task Target',
                            value: 'taskTarget',
                            description: 'Manage task associations - link tasks to specific CRM records',
                        },
                        {
                            name: 'Timeline Activity',
                            value: 'timelineActivity',
                            description: 'Manage timeline activities - track chronological history of interactions',
                        },
                        {
                            name: 'View',
                            value: 'view',
                            description: 'Manage custom views - create filtered and sorted data presentations',
                        },
                        {
                            name: 'View Field',
                            value: 'viewField',
                            description: 'Manage view field configurations - customize which fields appear in views',
                        },
                        {
                            name: 'View Filter',
                            value: 'viewFilter',
                            description: 'Manage view filters - define criteria for filtering records in views',
                        },
                        {
                            name: 'View Filter Group',
                            value: 'viewFilterGroup',
                            description: 'Manage view filter groups - organize multiple filters with logical operators',
                        },
                        {
                            name: 'View Group',
                            value: 'viewGroup',
                            description: 'Manage view grouping - organize records by specific field values',
                        },
                        {
                            name: 'View Sort',
                            value: 'viewSort',
                            description: 'Manage view sorting - define how records are ordered in views',
                        },
                        {
                            name: 'Webhook',
                            value: 'webhook',
                            description: 'Manage webhooks - configure real-time notifications for data changes',
                        },
                        {
                            name: 'Workspace Member',
                            value: 'workspaceMember',
                            description: 'Manage workspace members - user access and permissions within the workspace',
                        },
                    ],
                    default: 'general',
                },
                ...descriptions_1.generalOperations,
                ...descriptions_1.generalFields,
                ...descriptions_1.apiKeyOperations,
                ...descriptions_1.apiKeyFields,
                ...descriptions_1.attachmentOperations,
                ...descriptions_1.attachmentFields,
                ...descriptions_1.auditLogOperations,
                ...descriptions_1.auditLogFields,
                ...descriptions_1.blocklistOperations,
                ...descriptions_1.blocklistFields,
                ...descriptions_1.calendarChannelOperations,
                ...descriptions_1.calendarChannelFields,
                ...descriptions_1.calendarChannelEventAssociationOperations,
                ...descriptions_1.calendarChannelEventAssociationFields,
                ...descriptions_1.calendarEventOperations,
                ...descriptions_1.calendarEventFields,
                ...descriptions_1.calendarEventParticipantOperations,
                ...descriptions_1.calendarEventParticipantFields,
                ...descriptions_1.companyOperations,
                ...descriptions_1.companyFields,
                ...descriptions_1.connectedAccountOperations,
                ...descriptions_1.connectedAccountFields,
                ...descriptions_1.favoriteOperations,
                ...descriptions_1.favoriteFields,
                ...descriptions_1.favoriteFolderOperations,
                ...descriptions_1.favoriteFolderFields,
                ...descriptions_1.messageOperations,
                ...descriptions_1.messageFields,
                ...descriptions_1.messageChannelOperations,
                ...descriptions_1.messageChannelFields,
                ...descriptions_1.messageChannelMessageAssociationOperations,
                ...descriptions_1.messageChannelMessageAssociationFields,
                ...descriptions_1.messageParticipantOperations,
                ...descriptions_1.messageParticipantFields,
                ...descriptions_1.messageThreadOperations,
                ...descriptions_1.messageThreadFields,
                ...descriptions_1.noteOperations,
                ...descriptions_1.noteFields,
                ...descriptions_1.noteTargetOperations,
                ...descriptions_1.noteTargetFields,
                ...descriptions_1.opportunityOperations,
                ...descriptions_1.opportunityFields,
                ...descriptions_1.personOperations,
                ...descriptions_1.personFields,
                ...descriptions_1.taskOperations,
                ...descriptions_1.taskFields,
                ...descriptions_1.taskTargetOperations,
                ...descriptions_1.taskTargetFields,
                ...descriptions_1.timelineActivityOperations,
                ...descriptions_1.timelineActivityFields,
                ...descriptions_1.viewOperations,
                ...descriptions_1.viewFields,
                ...descriptions_1.viewFieldOperations,
                ...descriptions_1.viewFieldFields,
                ...descriptions_1.viewFilterOperations,
                ...descriptions_1.viewFilterFields,
                ...descriptions_1.viewFilterGroupOperations,
                ...descriptions_1.viewFilterGroupFields,
                ...descriptions_1.viewGroupOperations,
                ...descriptions_1.viewGroupFields,
                ...descriptions_1.viewSortOperations,
                ...descriptions_1.viewSortFields,
                ...descriptions_1.webhookOperations,
                ...descriptions_1.webhookFields,
                ...descriptions_1.workflowOperations,
                ...descriptions_1.workflowFields,
                ...descriptions_1.workflowEventListenerOperations,
                ...descriptions_1.workflowEventListenerFields,
                ...descriptions_1.workflowRunOperations,
                ...descriptions_1.workflowRunFields,
                ...descriptions_1.workflowVersionOperations,
                ...descriptions_1.workflowVersionFields,
                ...descriptions_1.workspaceMemberOperations,
                ...descriptions_1.workspaceMemberFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        let responseData;
        for (let i = 0; i < items.length; i++) {
            try {
                if (resource === 'general') {
                    if (operation === 'getOpenApiSchema') {
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/open-api/core', undefined, undefined, "");
                    }
                }
                else if (resource === 'apiKey') {
                    if (operation === 'createManyApiKeys') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/apiKeys', body, qs);
                    }
                    else if (operation === 'createOneApiKey') {
                        const body = {
                            expiresAt: this.getNodeParameter('expiresAt', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/apiKeys', body, qs);
                    }
                    else if (operation === 'deleteOneApiKey') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/apiKeys/${id}`);
                    }
                    else if (operation === 'findApiKeyDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/apiKeys/duplicates', body, qs);
                    }
                    else if (operation === 'findManyApiKeys') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/apiKeys', {}, qs);
                    }
                    else if (operation === 'findOneApiKey') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/apiKeys/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneApiKey') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/apiKeys/${id}`, body, qs);
                    }
                }
                else if (resource === 'attachment') {
                    if (operation === 'createManyAttachments') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/attachments', body, qs);
                    }
                    else if (operation === 'createOneAttachment') {
                        const body = {
                            authorId: this.getNodeParameter('authorId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/attachments', body, qs);
                    }
                    else if (operation === 'deleteOneAttachment') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/attachments/${id}`);
                    }
                    else if (operation === 'findAttachmentDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/attachments/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyAttachments') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/attachments', {}, qs);
                    }
                    else if (operation === 'findOneAttachment') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/attachments/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneAttachment') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/attachments/${id}`, body, qs);
                    }
                }
                else if (resource === 'auditLog') {
                    if (operation === 'createManyAuditLogs') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/auditLogs', body, qs);
                    }
                    else if (operation === 'createOneAuditLog') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/auditLogs', body, qs);
                    }
                    else if (operation === 'deleteOneAuditLog') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/auditLogs/${id}`);
                    }
                    else if (operation === 'findAuditLogDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/auditLogs/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyAuditLogs') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/auditLogs', {}, qs);
                    }
                    else if (operation === 'findOneAuditLog') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/auditLogs/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneAuditLog') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/auditLogs/${id}`, body, qs);
                    }
                }
                else if (resource === 'blocklist') {
                    if (operation === 'createManyBlocklists') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/blocklists', body, qs);
                    }
                    else if (operation === 'createOneBlocklist') {
                        const body = {
                            workspaceMemberId: this.getNodeParameter('workspaceMemberId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/blocklists', body, qs);
                    }
                    else if (operation === 'deleteOneBlocklist') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/blocklists/${id}`);
                    }
                    else if (operation === 'findBlocklistDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/blocklists/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyBlocklists') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/blocklists', {}, qs);
                    }
                    else if (operation === 'findOneBlocklist') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/blocklists/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneBlocklist') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/blocklists/${id}`, body, qs);
                    }
                }
                else if (resource === 'calendarChannel') {
                    if (operation === 'createManyCalendarChannels') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/calendarChannels';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneCalendarChannel') {
                        const body = {
                            connectedAccountId: this.getNodeParameter('connectedAccountId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/calendarChannels', body, qs);
                    }
                    else if (operation === 'deleteOneCalendarChannel') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/calendarChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findCalendarChannelDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarChannels/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyCalendarChannels') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/calendarChannels', {}, qs);
                    }
                    else if (operation === 'findOneCalendarChannel') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneCalendarChannel') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'calendarChannelEventAssociation') {
                    if (operation === 'createManyCalendarChannelEventAssociations') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/calendarChannelEventAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneCalendarChannelEventAssociation') {
                        const body = {
                            calendarChannelId: this.getNodeParameter('calendarChannelId', i),
                            calendarEventId: this.getNodeParameter('calendarEventId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarChannelEventAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'deleteOneCalendarChannelEventAssociation') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/calendarChannelEventAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findCalendarChannelEventAssociationDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarChannelEventAssociations/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyCalendarChannelEventAssociations') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarChannelEventAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findOneCalendarChannelEventAssociation') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarChannelEventAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneCalendarChannelEventAssociation') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarChannelEventAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'calendarEvent') {
                    if (operation === 'createManyCalendarEvents') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/calendarEvents';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneCalendarEvent') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/calendarEvents', body, qs);
                    }
                    else if (operation === 'deleteOneCalendarEvent') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/calendarEvents/${id}`);
                    }
                    else if (operation === 'findCalendarEventDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarEvents/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyCalendarEvents') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/calendarEvents', {}, qs);
                    }
                    else if (operation === 'findOneCalendarEvent') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/calendarEvents/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneCalendarEvent') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/calendarEvents/${id}`, body, qs);
                    }
                }
                else if (resource === 'calendarEventParticipant') {
                    if (operation === 'createManyCalendarEventParticipants') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/calendarEventParticipants';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneCalendarEventParticipant') {
                        const body = {
                            calendarEventId: this.getNodeParameter('calendarEventId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarEventParticipants';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'deleteOneCalendarEventParticipant') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/calendarEventParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findCalendarEventParticipantDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarEventParticipants/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyCalendarEventParticipants') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/calendarEventParticipants';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findOneCalendarEventParticipant') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarEventParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneCalendarEventParticipant') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/calendarEventParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'company') {
                    if (operation === 'createManyCompanies') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/companies', body, qs);
                    }
                    else if (operation === 'createOneCompany') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/companies', body, qs);
                    }
                    else if (operation === 'deleteOneCompany') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/companies/${id}`);
                    }
                    else if (operation === 'findCompanyDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/companies/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyCompanies') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/companies', {}, qs);
                    }
                    else if (operation === 'findOneCompany') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/companies/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneCompany') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/companies/${id}`, body, qs);
                    }
                }
                else if (resource === 'connectedAccount') {
                    if (operation === 'createManyConnectedAccounts') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/connectedAccounts';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneConnectedAccount') {
                        const body = {
                            accountOwnerId: this.getNodeParameter('accountOwnerId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/connectedAccounts', body, qs);
                    }
                    else if (operation === 'deleteOneConnectedAccount') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/connectedAccounts/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findConnectedAccountDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/connectedAccounts/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyConnectedAccounts') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/connectedAccounts', {}, qs);
                    }
                    else if (operation === 'findOneConnectedAccount') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/connectedAccounts/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneConnectedAccount') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/connectedAccounts/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'favorite') {
                    if (operation === 'createManyFavorites') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/favorites', body, qs);
                    }
                    else if (operation === 'createOneFavorite') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/favorites', body, qs);
                    }
                    else if (operation === 'deleteOneFavorite') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/favorites/${id}`);
                    }
                    else if (operation === 'findFavoriteDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/favorites/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyFavorites') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/favorites', {}, qs);
                    }
                    else if (operation === 'findOneFavorite') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/favorites/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneFavorite') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/favorites/${id}`, body, qs);
                    }
                }
                else if (resource === 'favoriteFolder') {
                    if (operation === 'createManyFavoriteFolders') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/favoriteFolders';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneFavoriteFolder') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/favoriteFolders', body, qs);
                    }
                    else if (operation === 'deleteOneFavoriteFolder') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/favoriteFolders/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findFavoriteFolderDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/favoriteFolders/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findManyFavoriteFolders') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/favoriteFolders', {}, qs);
                    }
                    else if (operation === 'findOneFavoriteFolder') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/favoriteFolders/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneFavoriteFolder') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/favoriteFolders/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'message') {
                    if (operation === 'createManyMessages') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/messages', body, qs);
                    }
                    else if (operation === 'createOneMessage') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/messages', body, qs);
                    }
                    else if (operation === 'deleteOneMessage') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/messages/${id}`);
                    }
                    else if (operation === 'findManyMessages') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/messages', {}, qs);
                    }
                    else if (operation === 'findMessageDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/messages/duplicates', body, qs);
                    }
                    else if (operation === 'findOneMessage') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/messages/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneMessage') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/messages/${id}`, body, qs);
                    }
                }
                else if (resource === 'messageChannel') {
                    if (operation === 'createManyMessageChannels') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/messageChannels';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneMessageChannel') {
                        const body = {
                            connectedAccountId: this.getNodeParameter('connectedAccountId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/messageChannels', body, qs);
                    }
                    else if (operation === 'deleteOneMessageChannel') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/messageChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyMessageChannels') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/messageChannels', {}, qs);
                    }
                    else if (operation === 'findMessageChannelDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageChannels/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findOneMessageChannel') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneMessageChannel') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageChannels/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'messageChannelMessageAssociation') {
                    if (operation === 'createManyMessageChannelMessageAssociations') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/messageChannelMessageAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneMessageChannelMessageAssociation') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageChannelMessageAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'deleteOneMessageChannelMessageAssociation') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/messageChannelMessageAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyMessageChannelMessageAssociations') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageChannelMessageAssociations';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findMessageChannelMessageAssociationDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageChannelMessageAssociations/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findOneMessageChannelMessageAssociation') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageChannelMessageAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneMessageChannelMessageAssociation') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageChannelMessageAssociations/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'messageParticipant') {
                    if (operation === 'createManyMessageParticipants') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/messageParticipants';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneMessageParticipant') {
                        const body = {
                            messageId: this.getNodeParameter('messageId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/messageParticipants', body, qs);
                    }
                    else if (operation === 'deleteOneMessageParticipant') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/messageParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyMessageParticipants') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/messageParticipants', {}, qs);
                    }
                    else if (operation === 'findMessageParticipantDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageParticipants/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findOneMessageParticipant') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'updateOneMessageParticipant') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/messageParticipants/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'messageThread') {
                    if (operation === 'createManyMessageThreads') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/messageThreads';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneMessageThread') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/messageThreads', body, qs);
                    }
                    else if (operation === 'deleteOneMessageThread') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/messageThreads/${id}`);
                    }
                    else if (operation === 'findManyMessageThreads') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/messageThreads', {}, qs);
                    }
                    else if (operation === 'findMessageThreadDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/messageThreads/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findOneMessageThread') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/messageThreads/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneMessageThread') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/messageThreads/${id}`, body, qs);
                    }
                }
                else if (resource === 'note') {
                    if (operation === 'createManyNotes') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/notes', body, qs);
                    }
                    else if (operation === 'createOneNote') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/notes', body, qs);
                    }
                    else if (operation === 'deleteOneNote') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/notes/${id}`);
                    }
                    else if (operation === 'findManyNotes') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/notes', {}, qs);
                    }
                    else if (operation === 'findNoteDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/notes/duplicates', body, qs);
                    }
                    else if (operation === 'findOneNote') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/notes/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneNote') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/notes/${id}`, body, qs);
                    }
                }
                else if (resource === 'noteTarget') {
                    if (operation === 'createManyNoteTargets') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/noteTargets', body, qs);
                    }
                    else if (operation === 'createOneNoteTarget') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/noteTargets', body, qs);
                    }
                    else if (operation === 'deleteOneNoteTarget') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/noteTargets/${id}`);
                    }
                    else if (operation === 'findManyNoteTargets') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/noteTargets', {}, qs);
                    }
                    else if (operation === 'findNoteTargetDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/noteTargets/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'findOneNoteTarget') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/noteTargets/${id}`, {}, qs);
                    }
                    else if (operation === 'updateOneNoteTarget') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/noteTargets/${id}`, body, qs);
                    }
                }
                else if (resource === 'opportunity') {
                    if (operation === 'createManyOpportunities') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/opportunities', body, qs);
                    }
                    else if (operation === 'createOneOpportunity') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/opportunities', body, qs);
                    }
                    else if (operation === 'deleteOneOpportunity') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/opportunities/${id}`);
                    }
                    else if (operation === 'findManyOpportunities') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/opportunities', {}, qs);
                    }
                    else if (operation === 'findOneOpportunity') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/opportunities/${id}`, {}, qs);
                    }
                    else if (operation === 'findOpportunityDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/opportunities/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneOpportunity') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/opportunities/${id}`, body, qs);
                    }
                }
                else if (resource === 'person') {
                    if (operation === 'createManyPeople') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/people', body, qs);
                    }
                    else if (operation === 'createOnePerson') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/people', body, qs);
                    }
                    else if (operation === 'deleteOnePerson') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/people/${id}`);
                    }
                    else if (operation === 'findManyPeople') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/people', {}, qs);
                    }
                    else if (operation === 'findOnePerson') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/people/${id}`, {}, qs);
                    }
                    else if (operation === 'findPersonDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/people/duplicates', body, qs);
                    }
                    else if (operation === 'updateOnePerson') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/people/${id}`, body, qs);
                    }
                }
                else if (resource === 'task') {
                    if (operation === 'createManyTasks') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/tasks', body, qs);
                    }
                    else if (operation === 'createOneTask') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/tasks', body, qs);
                    }
                    else if (operation === 'deleteOneTask') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/tasks/${id}`);
                    }
                    else if (operation === 'findManyTasks') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/tasks', {}, qs);
                    }
                    else if (operation === 'findOneTask') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/tasks/${id}`, {}, qs);
                    }
                    else if (operation === 'findTaskDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/tasks/duplicates', body, qs);
                    }
                    else if (operation === 'updateOneTask') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/tasks/${id}`, body, qs);
                    }
                }
                else if (resource === 'taskTarget') {
                    if (operation === 'createManyTaskTargets') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/taskTargets', body, qs);
                    }
                    else if (operation === 'createOneTaskTarget') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/taskTargets', body, qs);
                    }
                    else if (operation === 'deleteOneTaskTarget') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/taskTargets/${id}`);
                    }
                    else if (operation === 'findManyTaskTargets') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/taskTargets', {}, qs);
                    }
                    else if (operation === 'findOneTaskTarget') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/taskTargets/${id}`, {}, qs);
                    }
                    else if (operation === 'findTaskTargetDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/taskTargets/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneTaskTarget') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/taskTargets/${id}`, body, qs);
                    }
                }
                else if (resource === 'timelineActivity') {
                    if (operation === 'createManyTimelineActivities') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/timelineActivities';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneTimelineActivity') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/timelineActivities', body, qs);
                    }
                    else if (operation === 'deleteOneTimelineActivity') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/timelineActivities/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyTimelineActivities') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/timelineActivities', {}, qs);
                    }
                    else if (operation === 'findOneTimelineActivity') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/timelineActivities/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findTimelineActivityDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/timelineActivities/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneTimelineActivity') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/timelineActivities/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'view') {
                    if (operation === 'createManyViews') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/views', body, qs);
                    }
                    else if (operation === 'createOneView') {
                        const body = {
                            objectMetadataId: this.getNodeParameter('objectMetadataId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/views', body, qs);
                    }
                    else if (operation === 'deleteOneView') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/views/${id}`);
                    }
                    else if (operation === 'findManyViews') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/views', {}, qs);
                    }
                    else if (operation === 'findOneView') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/views/${id}`, {}, qs);
                    }
                    else if (operation === 'findViewDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/views/duplicates', body, qs);
                    }
                    else if (operation === 'updateOneView') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/views/${id}`, body, qs);
                    }
                }
                else if (resource === 'viewField') {
                    if (operation === 'createManyViewFields') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/viewFields', body, qs);
                    }
                    else if (operation === 'createOneViewField') {
                        const body = {
                            fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
                            viewId: this.getNodeParameter('viewId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/viewFields', body, qs);
                    }
                    else if (operation === 'deleteOneViewField') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/viewFields/${id}`);
                    }
                    else if (operation === 'findManyViewFields') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/viewFields', {}, qs);
                    }
                    else if (operation === 'findOneViewField') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/viewFields/${id}`, {}, qs);
                    }
                    else if (operation === 'findViewFieldDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/viewFields/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneViewField') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/viewFields/${id}`, body, qs);
                    }
                }
                else if (resource === 'viewFilter') {
                    if (operation === 'createManyViewFilters') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/viewFilters', body, qs);
                    }
                    else if (operation === 'createOneViewFilter') {
                        const body = {
                            fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/viewFilters', body, qs);
                    }
                    else if (operation === 'deleteOneViewFilter') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/viewFilters/${id}`);
                    }
                    else if (operation === 'findManyViewFilters') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/viewFilters', {}, qs);
                    }
                    else if (operation === 'findOneViewFilter') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/viewFilters/${id}`, {}, qs);
                    }
                    else if (operation === 'findViewFilterDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/viewFilters/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneViewFilter') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/viewFilters/${id}`, body, qs);
                    }
                }
                else if (resource === 'viewFilterGroup') {
                    if (operation === 'createManyViewFilterGroups') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/viewFilterGroups';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneViewFilterGroup') {
                        const body = {
                            viewId: this.getNodeParameter('viewId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/viewFilterGroups', body, qs);
                    }
                    else if (operation === 'deleteOneViewFilterGroup') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/viewFilterGroups/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyViewFilterGroups') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/viewFilterGroups', {}, qs);
                    }
                    else if (operation === 'findOneViewFilterGroup') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/viewFilterGroups/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findViewFilterGroupDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/viewFilterGroups/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneViewFilterGroup') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/viewFilterGroups/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'viewGroup') {
                    if (operation === 'createManyViewGroups') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/viewGroups', body, qs);
                    }
                    else if (operation === 'createOneViewGroup') {
                        const body = {
                            fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/viewGroups', body, qs);
                    }
                    else if (operation === 'deleteOneViewGroup') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/viewGroups/${id}`);
                    }
                    else if (operation === 'findManyViewGroups') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/viewGroups', {}, qs);
                    }
                    else if (operation === 'findOneViewGroup') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/viewGroups/${id}`, {}, qs);
                    }
                    else if (operation === 'findViewGroupDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/viewGroups/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneViewGroup') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/viewGroups/${id}`, body, qs);
                    }
                }
                else if (resource === 'viewSort') {
                    if (operation === 'createManyViewSorts') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/viewSorts', body, qs);
                    }
                    else if (operation === 'createOneViewSort') {
                        const body = {
                            fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/viewSorts', body, qs);
                    }
                    else if (operation === 'deleteOneViewSort') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/viewSorts/${id}`);
                    }
                    else if (operation === 'findManyViewSorts') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/viewSorts', {}, qs);
                    }
                    else if (operation === 'findOneViewSort') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/viewSorts/${id}`, {}, qs);
                    }
                    else if (operation === 'findViewSortDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/viewSorts/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneViewSort') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/viewSorts/${id}`, body, qs);
                    }
                }
                else if (resource === 'webhook') {
                    if (operation === 'createManyWebhooks') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/webhooks', body, qs);
                    }
                    else if (operation === 'createOneWebhook') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/webhooks', body, qs);
                    }
                    else if (operation === 'deleteOneWebhook') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/webhooks/${id}`);
                    }
                    else if (operation === 'findManyWebhooks') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/webhooks', {}, qs);
                    }
                    else if (operation === 'findOneWebhook') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/webhooks/${id}`, {}, qs);
                    }
                    else if (operation === 'findWebhookDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/webhooks/duplicates', body, qs);
                    }
                    else if (operation === 'updateOneWebhook') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/webhooks/${id}`, body, qs);
                    }
                }
                else if (resource === 'workflow') {
                    if (operation === 'createManyWorkflows') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/workflows', body, qs);
                    }
                    else if (operation === 'createOneWorkflow') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/workflows', body, qs);
                    }
                    else if (operation === 'deleteOneWorkflow') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/workflows/${id}`);
                    }
                    else if (operation === 'findManyWorkflows') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/workflows', {}, qs);
                    }
                    else if (operation === 'findOneWorkflow') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/workflows/${id}`, {}, qs);
                    }
                    else if (operation === 'findWorkflowDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflows/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneWorkflow') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/workflows/${id}`, body, qs);
                    }
                }
                else if (resource === 'workflowEventListener') {
                    if (operation === 'createManyWorkflowEventListeners') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/workflowEventListeners';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneWorkflowEventListener') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflowEventListeners';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'deleteOneWorkflowEventListener') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/workflowEventListeners/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyWorkflowEventListeners') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflowEventListeners';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findOneWorkflowEventListener') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workflowEventListeners/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findWorkflowEventListenerDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflowEventListeners/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneWorkflowEventListener') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workflowEventListeners/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'workflowRun') {
                    if (operation === 'createManyWorkflowRuns') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/batch/workflowRuns', body, qs);
                    }
                    else if (operation === 'createOneWorkflowRun') {
                        const body = {
                            workflowId: this.getNodeParameter('workflowId', i),
                            workflowVersionId: this.getNodeParameter('workflowVersionId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/workflowRuns', body, qs);
                    }
                    else if (operation === 'deleteOneWorkflowRun') {
                        const id = this.getNodeParameter('id', i);
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', `/workflowRuns/${id}`);
                    }
                    else if (operation === 'findManyWorkflowRuns') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/workflowRuns', {}, qs);
                    }
                    else if (operation === 'findOneWorkflowRun') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', `/workflowRuns/${id}`, {}, qs);
                    }
                    else if (operation === 'findWorkflowRunDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflowRuns/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneWorkflowRun') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', `/workflowRuns/${id}`, body, qs);
                    }
                }
                else if (resource === 'workflowVersion') {
                    if (operation === 'createManyWorkflowVersions') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/workflowVersions';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneWorkflowVersion') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/workflowVersions', body, qs);
                    }
                    else if (operation === 'deleteOneWorkflowVersion') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/workflowVersions/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyWorkflowVersions') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/workflowVersions', {}, qs);
                    }
                    else if (operation === 'findOneWorkflowVersion') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workflowVersions/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findWorkflowVersionDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workflowVersions/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneWorkflowVersion') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workflowVersions/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                else if (resource === 'workspaceMember') {
                    if (operation === 'createManyWorkspaceMembers') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/batch/workspaceMembers';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'createOneWorkspaceMember') {
                        const body = {
                            userId: this.getNodeParameter('userId', i),
                        };
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', '/workspaceMembers', body, qs);
                    }
                    else if (operation === 'deleteOneWorkspaceMember') {
                        const id = this.getNodeParameter('id', i);
                        const endpoint = `/workspaceMembers/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'DELETE', endpoint);
                    }
                    else if (operation === 'findManyWorkspaceMembers') {
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', '/workspaceMembers', {}, qs);
                    }
                    else if (operation === 'findOneWorkspaceMember') {
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workspaceMembers/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
                    }
                    else if (operation === 'findWorkspaceMemberDuplicates') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        if (Object.keys(additionalFields).length) {
                            Object.assign(body, additionalFields);
                        }
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = '/workspaceMembers/duplicates';
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'POST', endpoint, body, qs);
                    }
                    else if (operation === 'updateOneWorkspaceMember') {
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (Object.keys(updateFields).length) {
                            Object.assign(body, updateFields);
                        }
                        const id = this.getNodeParameter('id', i);
                        const qs = {};
                        const query = this.getNodeParameter('query', i);
                        if (Object.keys(query).length) {
                            Object.assign(qs, query);
                        }
                        const endpoint = `/workspaceMembers/${id}`;
                        responseData = await GenericFunctions_1.twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
                    }
                }
                const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
                returnData.push(...executionData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const executionErrorData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray({ error: error.message }), { itemData: { item: i } });
                    returnData.push(...executionErrorData);
                    continue;
                }
                throw error;
            }
        }
        return this.prepareOutputData(returnData);
    }
}
exports.Twenty = Twenty;
//# sourceMappingURL=Twenty.node.js.map