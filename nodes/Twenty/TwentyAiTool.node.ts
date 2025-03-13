import type {
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { twentyApiRequest } from './GenericFunctions';

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
						action: 'Execute a Twenty CRM operation through the AI tool interface',
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

					// Add operations based on selected resources
					if (includeOperations.includes('person')) {
						toolDescription.operations.push({
							type: 'person',
							operations: [
								'findOnePerson', 'findManyPeople', 'createOnePerson', 'updateOnePerson', 'deleteOnePerson'
							],
							description: 'Search, create, update, and delete person records in Twenty CRM',
							...(detailLevel === 'detailed' ? {
								parameters: {
									findOnePerson: { id: 'string' },
									findManyPeople: { filter: 'string', limit: 'number' },
									createOnePerson: { name: { firstName: 'string', lastName: 'string' }, emails: { primaryEmail: 'string' } },
									updateOnePerson: { id: 'string', name: { firstName: 'string', lastName: 'string' } },
									deleteOnePerson: { id: 'string' },
								}
							} : {}),
						});
					}

					if (includeOperations.includes('company')) {
						toolDescription.operations.push({
							type: 'company',
							operations: [
								'findOneCompany', 'findManyCompanies', 'createOneCompany', 'updateOneCompany', 'deleteOneCompany'
							],
							description: 'Search, create, update, and delete company records in Twenty CRM',
							...(detailLevel === 'detailed' ? {
								parameters: {
									findOneCompany: { id: 'string' },
									findManyCompanies: { filter: 'string', limit: 'number' },
									createOneCompany: { name: 'string', domainName: 'string' },
									updateOneCompany: { id: 'string', name: 'string' },
									deleteOneCompany: { id: 'string' },
								}
							} : {}),
						});
					}

					if (includeOperations.includes('task')) {
						toolDescription.operations.push({
							type: 'task',
							operations: [
								'findOneTask', 'findManyTasks', 'createOneTask', 'updateOneTask', 'deleteOneTask'
							],
							description: 'Search, create, update, and delete task records in Twenty CRM',
							...(detailLevel === 'detailed' ? {
								parameters: {
									findOneTask: { id: 'string' },
									findManyTasks: { filter: 'string', limit: 'number' },
									createOneTask: { title: 'string' },
									updateOneTask: { id: 'string', title: 'string' },
									deleteOneTask: { id: 'string' },
								}
							} : {}),
						});
					}

					if (includeOperations.includes('note')) {
						toolDescription.operations.push({
							type: 'note',
							operations: [
								'findOneNote', 'findManyNotes', 'createOneNote', 'updateOneNote', 'deleteOneNote'
							],
							description: 'Search, create, update, and delete note records in Twenty CRM',
							...(detailLevel === 'detailed' ? {
								parameters: {
									findOneNote: { id: 'string' },
									findManyNotes: { filter: 'string', limit: 'number' },
									createOneNote: { content: 'string' },
									updateOneNote: { id: 'string', content: 'string' },
									deleteOneNote: { id: 'string' },
								}
							} : {}),
						});
					}

					if (includeOperations.includes('opportunity')) {
						toolDescription.operations.push({
							type: 'opportunity',
							operations: [
								'findOneOpportunity', 'findManyOpportunities', 'createOneOpportunity', 'updateOneOpportunity', 'deleteOneOpportunity'
							],
							description: 'Search, create, update, and delete opportunity records in Twenty CRM',
							...(detailLevel === 'detailed' ? {
								parameters: {
									findOneOpportunity: { id: 'string' },
									findManyOpportunities: { filter: 'string', limit: 'number' },
									createOneOpportunity: { name: 'string', amount: 'number' },
									updateOneOpportunity: { id: 'string', name: 'string' },
									deleteOneOpportunity: { id: 'string' },
								}
							} : {}),
						});
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
					
					// Map operation to request method and endpoint
					
					if (targetOperation.startsWith('findOne')) {
						method = 'GET';
						endpoint = `/${targetResource}s/${parameters.id || ''}`;
					} else if (targetOperation.startsWith('findMany')) {
						method = 'GET';
						endpoint = `/${targetResource}s`;
					} else if (targetOperation.startsWith('createOne')) {
						method = 'POST';
						endpoint = `/${targetResource}s`;
						requestBody = parameters;
					} else if (targetOperation.startsWith('updateOne')) {
						method = 'PATCH';
						endpoint = `/${targetResource}s/${parameters.id || ''}`;
						requestBody = parameters;
					} else if (targetOperation.startsWith('deleteOne')) {
						method = 'DELETE';
						endpoint = `/${targetResource}s/${parameters.id || ''}`;
					} else {
						// Default to GET if operation not recognized
						method = 'GET';
						endpoint = `/${targetResource}s`;
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