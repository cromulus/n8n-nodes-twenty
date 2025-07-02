"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceDiscovery = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const RESOURCE_CATEGORIES = {
    'companies': 'crm',
    'people': 'crm',
    'relationships': 'crm',
    'attachments': 'crm',
    'opportunities': 'tasks',
    'tasks': 'tasks',
    'notes': 'tasks',
    'taskTargets': 'tasks',
    'noteTargets': 'tasks',
    'messages': 'communications',
    'messageThreads': 'communications',
    'messageChannels': 'communications',
    'messageChannelMessageAssociations': 'communications',
    'messageParticipants': 'communications',
    'messageFolders': 'communications',
    'calendarEvents': 'communications',
    'calendarChannels': 'communications',
    'calendarChannelEventAssociations': 'communications',
    'calendarEventParticipants': 'communications',
    'timelineActivities': 'communications',
    'workflows': 'system',
    'workflowVersions': 'system',
    'workflowRuns': 'system',
    'workflowAutomatedTriggers': 'system',
    'webhooks': 'system',
    'apiKeys': 'system',
    'views': 'system',
    'viewFields': 'system',
    'viewFilters': 'system',
    'viewFilterGroups': 'system',
    'viewGroups': 'system',
    'viewSorts': 'system',
    'connectedAccounts': 'system',
    'workspaceMembers': 'system',
    'favorites': 'system',
    'favoriteFolders': 'system',
    'blocklists': 'system',
};
class ResourceDiscovery {
    static async fetchOpenApiSchema(context) {
        try {
            return await GenericFunctions_1.twentyApiRequest.call(context, 'GET', '/rest/open-api/core');
        }
        catch (error) {
            throw new Error(`Failed to fetch OpenAPI schema: ${error.message}`);
        }
    }
    static extractResourcesFromSchema(schema) {
        const resources = [];
        const paths = schema.paths;
        if (!paths)
            return resources;
        for (const path of Object.keys(paths)) {
            const match = path.match(/^\/([a-zA-Z][a-zA-Z0-9]*(?:[A-Z][a-z]*)*)/);
            if (match && match[1]) {
                const resource = match[1];
                if (!resources.includes(resource)) {
                    resources.push(resource);
                }
            }
        }
        return resources.sort();
    }
    static createResourceInfo(resource) {
        const category = RESOURCE_CATEGORIES[resource] || 'system';
        const name = resource
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
        let description = '';
        switch (category) {
            case 'crm':
                description = `Manage ${name.toLowerCase()} records - core CRM entities`;
                break;
            case 'tasks':
                description = `Manage ${name.toLowerCase()} - sales pipeline and task management`;
                break;
            case 'communications':
                description = `Manage ${name.toLowerCase()} - communications and scheduling`;
                break;
            case 'system':
                description = `Manage ${name.toLowerCase()} - system configuration and administration`;
                break;
        }
        return {
            name,
            value: resource,
            description,
            endpoint: `/${resource}`,
            category,
        };
    }
    static async discoverResources(context) {
        try {
            const schema = await this.fetchOpenApiSchema(context);
            const resourceNames = this.extractResourcesFromSchema(schema);
            return resourceNames.map(resource => this.createResourceInfo(resource));
        }
        catch (error) {
            return this.getFallbackResources();
        }
    }
    static async discoverResourcesByCategory(context, category) {
        const allResources = await this.discoverResources(context);
        return allResources.filter(resource => resource.category === category);
    }
    static getFallbackResources() {
        const fallbackResourceNames = [
            'companies', 'people', 'relationships', 'attachments',
            'opportunities', 'tasks', 'notes', 'taskTargets', 'noteTargets',
            'messages', 'messageThreads', 'messageChannels', 'calendarEvents', 'calendarChannels', 'timelineActivities',
            'workflows', 'webhooks', 'apiKeys', 'views', 'connectedAccounts', 'workspaceMembers'
        ];
        return fallbackResourceNames.map(resource => this.createResourceInfo(resource));
    }
    static getStandardOperations() {
        return [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new record',
                action: 'Create record',
                method: 'POST',
            },
            {
                name: 'Create Many',
                value: 'createMany',
                description: 'Create multiple records in batch',
                action: 'Create many records',
                method: 'POST',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update an existing record',
                action: 'Update record',
                method: 'PATCH',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a record by ID',
                action: 'Get record',
                method: 'GET',
            },
            {
                name: 'Get Many',
                value: 'getMany',
                description: 'Find multiple records with filtering and sorting',
                action: 'Get many records',
                method: 'GET',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a record',
                action: 'Delete record',
                method: 'DELETE',
            },
        ];
    }
}
exports.ResourceDiscovery = ResourceDiscovery;
//# sourceMappingURL=ResourceDiscovery.js.map