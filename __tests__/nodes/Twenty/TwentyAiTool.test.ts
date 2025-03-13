import { TwentyAiTool } from '../../../nodes/Twenty/TwentyAiTool.node';
import { mockExecuteFunctions, mockApiRequest } from '../../mocks/n8n-workflow';
import * as GenericFunctions from '../../../nodes/Twenty/GenericFunctions';
import type { IDataObject, IGetNodeParameterOptions } from 'n8n-workflow';

jest.mock('../../../nodes/Twenty/GenericFunctions', () => ({
  twentyApiRequest: jest.fn(),
}));

describe('TwentyAiTool Node', () => {
  let twentyAiToolNode: TwentyAiTool;
  let mockExecute: ReturnType<typeof mockExecuteFunctions>;

  beforeEach(() => {
    jest.clearAllMocks();
    twentyAiToolNode = new TwentyAiTool();
    mockExecute = mockExecuteFunctions();
    
    // Mock the twentyApiRequest function
    (GenericFunctions.twentyApiRequest as jest.Mock).mockImplementation(mockApiRequest);
  });

  describe('execute()', () => {
    it('should return a tool description when operation is getToolDescription', async () => {
      // Mock specific parameters for this test
      mockExecute.getNodeParameter.mockImplementation(
        (parameterName: string, itemIndex: number, fallbackValue?: any, options?: IGetNodeParameterOptions) => {
          if (parameterName === 'operation' && itemIndex === 0) return 'getToolDescription';
          if (parameterName === 'includeOperations' && itemIndex === 0) return ['person', 'company'];
          if (parameterName === 'detailLevel' && itemIndex === 0) return 'basic';
          return fallbackValue;
        }
      );

      const result = await twentyAiToolNode.execute.call(mockExecute);

      // Verify results
      expect(result).toBeDefined();
      expect(result[0]).toHaveLength(1);
      
      const toolDescription = result[0][0].json as IDataObject;
      expect(toolDescription).toHaveProperty('name', 'Twenty CRM Tool');
      expect(toolDescription).toHaveProperty('description');
      expect(toolDescription).toHaveProperty('operations');
      
      const operations = toolDescription.operations as IDataObject[];
      expect(operations).toHaveLength(2); // person and company only
      
      // Check that person operations exist
      const personOperations = operations.find((op) => op.type === 'person');
      expect(personOperations).toBeDefined();
      expect((personOperations?.operations as string[])).toContain('findOnePerson');
      expect((personOperations?.operations as string[])).toContain('createOnePerson');
      
      // Check that company operations exist
      const companyOperations = operations.find((op) => op.type === 'company');
      expect(companyOperations).toBeDefined();
      expect((companyOperations?.operations as string[])).toContain('findOneCompany');
      expect((companyOperations?.operations as string[])).toContain('createOneCompany');
    });

    it('should get detailed tool description when detailLevel is set to detailed', async () => {
      // Mock specific parameters for this test
      mockExecute.getNodeParameter.mockImplementation(
        (parameterName: string, itemIndex: number, fallbackValue?: any, options?: IGetNodeParameterOptions) => {
          if (parameterName === 'operation' && itemIndex === 0) return 'getToolDescription';
          if (parameterName === 'includeOperations' && itemIndex === 0) return ['person'];
          if (parameterName === 'detailLevel' && itemIndex === 0) return 'detailed';
          return fallbackValue;
        }
      );

      const result = await twentyAiToolNode.execute.call(mockExecute);

      // Verify results
      const toolDescription = result[0][0].json as IDataObject;
      expect(toolDescription).toHaveProperty('operations');
      
      const operations = toolDescription.operations as IDataObject[];
      expect(operations).toHaveLength(1); // person only
      
      // Check that person operations have parameters
      const personOperations = operations[0] as IDataObject;
      expect(personOperations).toHaveProperty('parameters');
      expect((personOperations.parameters as IDataObject)).toHaveProperty('findOnePerson');
      expect(((personOperations.parameters as IDataObject).findOnePerson as IDataObject)).toHaveProperty('id');
    });
    
    it('should execute a tool operation when operation is executeTool', async () => {
      // Mock specific parameters for this test
      mockExecute.getNodeParameter.mockImplementation(
        (parameterName: string, itemIndex: number, fallbackValue?: any, options?: IGetNodeParameterOptions) => {
          if (parameterName === 'operation' && itemIndex === 0) return 'executeTool';
          if (parameterName === 'targetResource' && itemIndex === 0) return 'person';
          if (parameterName === 'targetOperation' && itemIndex === 0) return 'findManyPeople';
          if (parameterName === 'parameters' && itemIndex === 0) return '{}';
          if (parameterName === 'queryParameters' && itemIndex === 0) return '{}';
          return fallbackValue;
        }
      );

      const result = await twentyAiToolNode.execute.call(mockExecute);

      // Verify that twentyApiRequest was called with the correct parameters
      expect(GenericFunctions.twentyApiRequest).toHaveBeenCalledWith(
        'GET',
        '/persons',
        expect.any(Object),
        expect.any(Object)
      );
      
      // Verify results
      expect(result).toBeDefined();
      expect(result[0]).toHaveLength(1);
    });
  });
});