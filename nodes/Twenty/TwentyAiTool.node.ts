import type {
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

import { twentyApiRequest } from './GenericFunctions';

// Define standard operation patterns for each resource
const standardOperations = (resourceName: string, pluralName?: string) => {
	const plural = pluralName || `${resourceName}s`;
	const operations = [
		`findOne${resourceName}`,
		`findMany${plural}`,
		`createOne${resourceName}`,
		`updateOne${resourceName}`,
		`deleteOne${resourceName}`,
	];
	return operations;
};

// Define common parameters for each operation type
const standardParameters = (resourceName: string) => {
	return {
		[`findOne${resourceName}`]: { id: 'string' },
		[`findMany${resourceName}s`]: { filter: 'string', limit: 'number', orderBy: 'string', fields: 'string[]' },
		[`createOne${resourceName}`]: { /* Will be populated with resource-specific fields */ },
		[`updateOne${resourceName}`]: { id: 'string', /* Will be populated with resource-specific fields */ },
		[`deleteOne${resourceName}`]: { id: 'string' },
	};
};

// Define resource-specific parameters for detailed descriptions
const resourceSpecificParameters: IDataObject = {
	'person': {
		createOnePerson: { name: { firstName: 'string', lastName: 'string' }, emails: { primaryEmail: 'string' }, phone: 'string', city: 'string', avatarUrl: 'string' },
		updateOnePerson: { id: 'string', name: { firstName: 'string', lastName: 'string' }, emails: { primaryEmail: 'string' }, phone: 'string', city: 'string' }
	},
	'company': { 
		createOneCompany: { name: 'string', domainName: 'string', address: 'string', employees: 'number', linkedinUrl: 'string' },
		updateOneCompany: { id: 'string', name: 'string', domainName: 'string', address: 'string', employees: 'number' }
	},
	'task': {
		createOneTask: { title: 'string', body: 'string', dueAt: 'string', assigneeId: 'string' },
		updateOneTask: { id: 'string', title: 'string', body: 'string', dueAt: 'string', completedAt: 'string' }
	},
	'note': {
		createOneNote: { content: 'string', targetId: 'string', targetType: 'string' },
		updateOneNote: { id: 'string', content: 'string' }
	},
	'opportunity': {
		createOneOpportunity: { name: 'string', amount: 'number', probability: 'number', closeDate: 'string', personId: 'string', companyId: 'string' },
		updateOneOpportunity: { id: 'string', name: 'string', amount: 'number', probability: 'number', closeDate: 'string', stage: 'string' }
	},
	'apiKey': {
		createOneApiKey: { name: 'string', expiresAt: 'string' }
	},
	'attachment': {
		createOneAttachment: { name: 'string', fullPath: 'string', type: 'string' }
	},
	'auditLog': {
		// Typically only read operations for audit logs
	},
	'blocklist': {
		createOneBlocklist: { value: 'string', type: 'string' }
	},
	'calendarChannel': {
		createOneCalendarChannel: { name: 'string', type: 'string', connectedAccountId: 'string' }
	},
	'calendarEvent': {
		createOneCalendarEvent: { title: 'string', startsAt: 'string', endsAt: 'string', description: 'string' }
	},
	'messageThread': {
		createOneMessageThread: { subject: 'string' }
	},
	'message': {
		createOneMessage: { body: 'string', messageThreadId: 'string' }
	},
};

// Plural mappings for irregular plurals
const pluralMappings: IDataObject = {
	'person': 'people',
	'company': 'companies',
	'activity': 'activities',
	'opportunity': 'opportunities',
};

// All resources are defined in the UI options

export class TwentyAiTool implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twenty AI Tool',
		name: 'twentyAiTool',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Use Twenty as a tool in AI workflows',
		defaults: {
			name: 'Twenty AI Tool',
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
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Tool Description',
						value: 'getToolDescription',
						description: 'Get the description of this tool for AI usage',
						action: 'Get the description of this tool for AI usage',
					},
					{
						name: 'Execute Tool',
						value: 'executeTool',
						description: 'Execute a Twenty CRM operation through the AI tool interface',
						action: 'Execute a twenty crm operation through the ai tool interface',
					},
				],
				default: 'getToolDescription',
			},

			// ----------------------------------------
			//        getToolDescription
			// ----------------------------------------
			{
				displayName: 'Include Operations',
				name: 'includeOperations',
				type: 'multiOptions',
				options: [
					{
						name: 'API Key Operations',
						value: 'apiKey',
					},
					{
						name: 'Attachment Operations',
						value: 'attachment',
					},
					{
						name: 'Audit Log Operations',
						value: 'auditLog',
					},
					{
						name: 'Blocklist Operations',
						value: 'blocklist',
					},
					{
						name: 'Calendar Channel Operations',
						value: 'calendarChannel',
					},
					{
						name: 'Calendar Channel Event Association Operations',
						value: 'calendarChannelEventAssociation',
					},
					{
						name: 'Calendar Event Operations',
						value: 'calendarEvent',
					},
					{
						name: 'Calendar Event Participant Operations',
						value: 'calendarEventParticipant',
					},
					{
						name: 'Company Operations',
						value: 'company',
					},
					{
						name: 'Connected Account Operations',
						value: 'connectedAccount',
					},
					{
						name: 'Favorite Operations',
						value: 'favorite',
					},
					{
						name: 'Favorite Folder Operations',
						value: 'favoriteFolder',
					},
					{
						name: 'Message Operations',
						value: 'message',
					},
					{
						name: 'Message Channel Operations',
						value: 'messageChannel',
					},
					{
						name: 'Message Channel Message Association Operations',
						value: 'messageChannelMessageAssociation',
					},
					{
						name: 'Message Participant Operations',
						value: 'messageParticipant',
					},
					{
						name: 'Message Thread Operations',
						value: 'messageThread',
					},
					{
						name: 'Note Operations',
						value: 'note',
					},
					{
						name: 'Note Target Operations',
						value: 'noteTarget',
					},
					{
						name: 'Opportunity Operations',
						value: 'opportunity',
					},
					{
						name: 'Person Operations',
						value: 'person',
					},
					{
						name: 'Task Operations',
						value: 'task',
					},
					{
						name: 'Task Target Operations',
						value: 'taskTarget',
					},
					{
						name: 'Timeline Activity Operations',
						value: 'timelineActivity',
					},
					{
						name: 'View Operations',
						value: 'view',
					},
					{
						name: 'View Field Operations',
						value: 'viewField',
					},
					{
						name: 'View Filter Operations',
						value: 'viewFilter',
					},
					{
						name: 'View Filter Group Operations',
						value: 'viewFilterGroup',
					},
					{
						name: 'View Group Operations',
						value: 'viewGroup',
					},
					{
						name: 'View Sort Operations',
						value: 'viewSort',
					},
					{
						name: 'Webhook Operations',
						value: 'webhook',
					},
					{
						name: 'Workflow Operations',
						value: 'workflow',
					},
					{
						name: 'Workflow Event Listener Operations',
						value: 'workflowEventListener',
					},
					{
						name: 'Workflow Run Operations',
						value: 'workflowRun',
					},
					{
						name: 'Workflow Version Operations',
						value: 'workflowVersion',
					},
					{
						name: 'Workspace Member Operations',
						value: 'workspaceMember',
					},
				],
				default: ['person', 'company', 'task', 'note', 'opportunity'],
				description: 'Which operation types to include in the tool description',
				displayOptions: {
					show: {
						operation: [
							'getToolDescription',
						],
					},
				},
			},
			{
				displayName: 'Detail Level',
				name: 'detailLevel',
				type: 'options',
				options: [
					{
						name: 'Basic',
						value: 'basic',
						description: 'Include basic information about operations',
					},
					{
						name: 'Detailed',
						value: 'detailed',
						description: 'Include detailed information about operations and their parameters',
					},
				],
				default: 'basic',
				description: 'How much detail to include in the tool description',
				displayOptions: {
					show: {
						operation: [
							'getToolDescription',
						],
					},
				},
			},

			// ----------------------------------------
			//        executeTool
			// ----------------------------------------
			{
				displayName: 'Target Resource',
				name: 'targetResource',
				type: 'options',
				options: [
					{
						name: 'API Key',
						value: 'apiKey',
					},
					{
						name: 'Attachment',
						value: 'attachment',
					},
					{
						name: 'Audit Log',
						value: 'auditLog',
					},
					{
						name: 'Blocklist',
						value: 'blocklist',
					},
					{
						name: 'Calendar Channel',
						value: 'calendarChannel',
					},
					{
						name: 'Calendar Channel Event Association',
						value: 'calendarChannelEventAssociation',
					},
					{
						name: 'Calendar Event',
						value: 'calendarEvent',
					},
					{
						name: 'Calendar Event Participant',
						value: 'calendarEventParticipant',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Connected Account',
						value: 'connectedAccount',
					},
					{
						name: 'Favorite',
						value: 'favorite',
					},
					{
						name: 'Favorite Folder',
						value: 'favoriteFolder',
					},
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Message Channel',
						value: 'messageChannel',
					},
					{
						name: 'Message Channel Message Association',
						value: 'messageChannelMessageAssociation',
					},
					{
						name: 'Message Participant',
						value: 'messageParticipant',
					},
					{
						name: 'Message Thread',
						value: 'messageThread',
					},
					{
						name: 'Note',
						value: 'note',
					},
					{
						name: 'Note Target',
						value: 'noteTarget',
					},
					{
						name: 'Opportunity',
						value: 'opportunity',
					},
					{
						name: 'Person',
						value: 'person',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Task Target',
						value: 'taskTarget',
					},
					{
						name: 'Timeline Activity',
						value: 'timelineActivity',
					},
					{
						name: 'View',
						value: 'view',
					},
					{
						name: 'View Field',
						value: 'viewField',
					},
					{
						name: 'View Filter',
						value: 'viewFilter',
					},
					{
						name: 'View Filter Group',
						value: 'viewFilterGroup',
					},
					{
						name: 'View Group',
						value: 'viewGroup',
					},
					{
						name: 'View Sort',
						value: 'viewSort',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
					{
						name: 'Workflow',
						value: 'workflow',
					},
					{
						name: 'Workflow Event Listener',
						value: 'workflowEventListener',
					},
					{
						name: 'Workflow Run',
						value: 'workflowRun',
					},
					{
						name: 'Workflow Version',
						value: 'workflowVersion',
					},
					{
						name: 'Workspace Member',
						value: 'workspaceMember',
					},
				],
				default: 'person',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'executeTool',
						],
					},
				},
			},
			{
				displayName: 'Target Operation',
				name: 'targetOperation',
				type: 'string',
				default: '',
				required: true,
				description: 'The operation to execute on the target resource (e.g. findOnePerson, createOneCompany)',
				displayOptions: {
					show: {
						operation: [
							'executeTool',
						],
					},
				},
			},
			{
				displayName: 'Parameters',
				name: 'parameters',
				type: 'json',
				default: '{}',
				description: 'The parameters to pass to the operation (as JSON object)',
				displayOptions: {
					show: {
						operation: [
							'executeTool',
						],
					},
				},
			},
			{
				displayName: 'Query Parameters',
				name: 'queryParameters',
				type: 'json',
				default: '{}',
				description: 'Additional query parameters to include with the operation (as JSON object)',
				displayOptions: {
					show: {
						operation: [
							'executeTool',
						],
					},
				},
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const operation = this.getNodeParameter('operation', 0) as string;

		let responseData;

		for (let i = 0; i < items.length; i++) {
			try {
				if (operation === 'getToolDescription') {
					// ----------------------------------------
					//        getToolDescription
					// ----------------------------------------

					const includeOperations = this.getNodeParameter('includeOperations', i, ['person', 'company', 'task', 'note', 'opportunity']) as string[];
					const detailLevel = this.getNodeParameter('detailLevel', i) as string;

					// Build tool description based on selected operations
					const toolDescription = {
						name: 'Twenty CRM Tool',
						description: 'Access and manipulate data in Twenty CRM system',
						version: '1.0',
						operations: [] as any[],
					};

					// Helper function to get resource description
					const getResourceDescription = (resourceName: string) => {
						let description = `Search, create, update, and delete ${resourceName} records in Twenty CRM`;
						
						if (resourceName === 'person') {
							description = 'Manage individual contacts and their details in Twenty CRM';
						} else if (resourceName === 'company') {
							description = 'Manage organizations and their information in Twenty CRM';
						} else if (resourceName === 'task') {
							description = 'Manage tasks and to-dos in Twenty CRM';
						} else if (resourceName === 'note') {
							description = 'Manage notes attached to people, companies, or other records in Twenty CRM';
						} else if (resourceName === 'opportunity') {
							description = 'Manage sales opportunities and deals in Twenty CRM';
						} else if (resourceName === 'attachment') {
							description = 'Manage files and documents in Twenty CRM';
						} else if (resourceName === 'workflow') {
							description = 'Manage automated workflows in Twenty CRM';
						} else if (resourceName === 'webhook') {
							description = 'Manage webhook integrations in Twenty CRM';
						}
						
						return description;
					};

					// Add operations for each selected resource
					for (const resourceName of includeOperations) {
						// Get plural form with fallback
						const pluralName = pluralMappings[resourceName] as string || `${resourceName}s`;
						
						// Get standard operations for this resource
						const operations = standardOperations(
							// Capitalize first letter of resource name for operation names
							resourceName.charAt(0).toUpperCase() + resourceName.slice(1),
							// Capitalize first letter of plural name for operation names
							pluralName.charAt(0).toUpperCase() + pluralName.slice(1)
						);
						
						// Add parameters if detailed description is requested
						const operationEntry: IDataObject = {
							type: resourceName,
							operations,
							description: getResourceDescription(resourceName),
						};
						
						if (detailLevel === 'detailed') {
							// Create parameters object with standard parameters
							const params = standardParameters(
								resourceName.charAt(0).toUpperCase() + resourceName.slice(1)
							);
							
							// Add resource-specific parameters if they exist
							if (resourceSpecificParameters[resourceName]) {
								for (const opName in resourceSpecificParameters[resourceName] as IDataObject) {
									if (Object.prototype.hasOwnProperty.call(resourceSpecificParameters[resourceName], opName)) {
										params[opName] = {
											...params[opName],
											...((resourceSpecificParameters[resourceName] as IDataObject)[opName] as object),
										};
									}
								}
							}
							
							operationEntry.parameters = params;
						}
						
						toolDescription.operations.push(operationEntry);
					}

					// Set the response data to the tool description
					responseData = toolDescription;

				} else if (operation === 'executeTool') {
					// ----------------------------------------
					//        executeTool
					// ----------------------------------------

					const targetResource = this.getNodeParameter('targetResource', i) as string;
					const targetOperation = this.getNodeParameter('targetOperation', i) as string;
					const parameters = JSON.parse(this.getNodeParameter('parameters', i, '{}') as string);
					const queryParameters = JSON.parse(this.getNodeParameter('queryParameters', i, '{}') as string);
					
					// Call the appropriate API endpoint based on the target resource and operation
					let endpoint = '';
					let method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
					let requestBody = {};
					
					// Determine the endpoint name - handling pluralization correctly
					const getEndpointName = (resource: string) => {
						// Check if resource has a special plural form
						if (pluralMappings[resource]) {
							return pluralMappings[resource];
						}
						// Default pluralization
						return `${resource}s`;
					};
					
					const endpointName = getEndpointName(targetResource);
					
					// Map operation to request method and endpoint
					if (targetOperation.startsWith('findOne')) {
						method = 'GET';
						endpoint = `/${endpointName}/${parameters.id || ''}`;
					} else if (targetOperation.startsWith('findMany')) {
						method = 'GET';
						endpoint = `/${endpointName}`;
					} else if (targetOperation.startsWith('createOne')) {
						method = 'POST';
						endpoint = `/${endpointName}`;
						requestBody = parameters;
					} else if (targetOperation.startsWith('updateOne')) {
						method = 'PATCH';
						endpoint = `/${endpointName}/${parameters.id || ''}`;
						requestBody = parameters;
					} else if (targetOperation.startsWith('deleteOne')) {
						method = 'DELETE';
						endpoint = `/${endpointName}/${parameters.id || ''}`;
					} else {
						// Handle custom operations
						if (targetOperation.includes('search')) {
							method = 'GET';
							endpoint = `/${endpointName}/search`;
						} else if (targetOperation.includes('count')) {
							method = 'GET';
							endpoint = `/${endpointName}/count`;
						} else if (targetOperation.includes('batch')) {
							method = 'POST';
							endpoint = `/${endpointName}/batch`;
							requestBody = parameters;
						} else {
							// Default to GET if operation not recognized
							method = 'GET';
							endpoint = `/${endpointName}`;
						}
					}
					
					// Execute the API request
					responseData = await twentyApiRequest.call(
						this, 
						method, 
						endpoint, 
						requestBody, 
						queryParameters
					);
				}
				
				// Map the response data to the output item
				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData),
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