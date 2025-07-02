import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { twentyApiRequest } from './GenericFunctions';

export interface ResourceInfo {
	name: string;
	value: string;
	description: string;
	endpoint: string;
	category: 'crm' | 'tasks' | 'communications' | 'system';
}

export interface OperationInfo {
	name: string;
	value: string;
	description: string;
	action: string;
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

// Resource categorization based on Twenty CRM domain knowledge
const RESOURCE_CATEGORIES: Record<string, 'crm' | 'tasks' | 'communications' | 'system'> = {
	// CRM Core
	'companies': 'crm',
	'people': 'crm',
	'relationships': 'crm',
	'attachments': 'crm',

	// Tasks & Sales
	'opportunities': 'tasks',
	'tasks': 'tasks',
	'notes': 'tasks',
	'taskTargets': 'tasks',
	'noteTargets': 'tasks',

	// Communications
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

	// System
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

export class ResourceDiscovery {
	private static async fetchOpenApiSchema(context: IExecuteFunctions): Promise<IDataObject> {
		try {
			return await twentyApiRequest.call(context, 'GET', '/rest/open-api/core');
		} catch (error) {
			throw new Error(`Failed to fetch OpenAPI schema: ${error.message}`);
		}
	}

	private static extractResourcesFromSchema(schema: IDataObject): string[] {
		const resources: string[] = [];
		const paths = schema.paths as IDataObject;

		if (!paths) return resources;

		// Extract resources from API paths
		for (const path of Object.keys(paths)) {
			// Match patterns like /companies, /people, etc.
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

	private static createResourceInfo(resource: string): ResourceInfo {
		const category = RESOURCE_CATEGORIES[resource] || 'system';

		// Generate human-readable name
		const name = resource
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, str => str.toUpperCase())
			.trim();

		// Generate description based on category and name
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

	static async discoverResources(context: IExecuteFunctions): Promise<ResourceInfo[]> {
		try {
			const schema = await this.fetchOpenApiSchema(context);
			const resourceNames = this.extractResourcesFromSchema(schema);

			return resourceNames.map(resource => this.createResourceInfo(resource));
		} catch (error) {
			// Fallback to known resources if discovery fails
			// Resource discovery failed, using fallback resources
			return this.getFallbackResources();
		}
	}

	static async discoverResourcesByCategory(
		context: IExecuteFunctions,
		category: 'crm' | 'tasks' | 'communications' | 'system'
	): Promise<ResourceInfo[]> {
		const allResources = await this.discoverResources(context);
		return allResources.filter(resource => resource.category === category);
	}

	private static getFallbackResources(): ResourceInfo[] {
		const fallbackResourceNames = [
			'companies', 'people', 'relationships', 'attachments',
			'opportunities', 'tasks', 'notes', 'taskTargets', 'noteTargets',
			'messages', 'messageThreads', 'messageChannels', 'calendarEvents', 'calendarChannels', 'timelineActivities',
			'workflows', 'webhooks', 'apiKeys', 'views', 'connectedAccounts', 'workspaceMembers'
		];

		return fallbackResourceNames.map(resource => this.createResourceInfo(resource));
	}

	static getStandardOperations(): OperationInfo[] {
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
