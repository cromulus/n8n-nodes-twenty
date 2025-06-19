import type {
	INodeProperties,
} from 'n8n-workflow';

export const generalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'general',
				],
			},
		},
		options: [
			{
				name: 'Get Open Api Schema',
				value: 'getOpenApiSchema',
				description: 'Retrieve the OpenAPI schema for the Twenty CRM API. This provides detailed information about all available endpoints, data models, and field definitions.',
				action: 'Get open api schema',
			},
		],
		default: 'getOpenApiSchema',
	},
];

export const generalFields: INodeProperties[] = [
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'general',
					],
					operation: [
						'getOpenApiSchema',
					],
				},
			},
		},
];
