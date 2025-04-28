import type {
	INodeProperties,
} from 'n8n-workflow';

export const aiToolOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'aiTool',
				],
			},
		},
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
];

export const aiToolFields: INodeProperties[] = [
	// ----------------------------------------
	//        aiTool: getToolDescription
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
				resource: [
					'aiTool',
				],
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
				resource: [
					'aiTool',
				],
				operation: [
					'getToolDescription',
				],
			},
		},
	},

	// ----------------------------------------
	//        aiTool: executeTool
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
				resource: [
					'aiTool',
				],
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
				resource: [
					'aiTool',
				],
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
				resource: [
					'aiTool',
				],
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
				resource: [
					'aiTool',
				],
				operation: [
					'executeTool',
				],
			},
		},
	},
];