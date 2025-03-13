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
				action: 'Execute a Twenty CRM operation through the AI tool interface',
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
				name: 'Person Operations',
				value: 'person',
			},
			{
				name: 'Company Operations',
				value: 'company',
			},
			{
				name: 'Task Operations',
				value: 'task',
			},
			{
				name: 'Note Operations',
				value: 'note',
			},
			{
				name: 'Opportunity Operations',
				value: 'opportunity',
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
				name: 'Person',
				value: 'person',
			},
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'Task',
				value: 'task',
			},
			{
				name: 'Note',
				value: 'note',
			},
			{
				name: 'Opportunity',
				value: 'opportunity',
			},
		],
		default: 'person',
		required: true,
		description: 'Which Twenty CRM resource to operate on',
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