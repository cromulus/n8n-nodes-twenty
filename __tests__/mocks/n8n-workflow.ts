import { mock } from 'jest-mock-extended';
import type { 
  IExecuteFunctions, 
  IDataObject, 
  INodeExecutionData,
  NodeApiError,
  IGetNodeParameterOptions
} from 'n8n-workflow';

// Create a mock for NodeApiError
export const mockNodeApiError = () => {
  return mock<NodeApiError>();
}

export const mockExecuteFunctions = () => {
  const instance = mock<IExecuteFunctions>();

  // Create a type-compatible mock implementation
  instance.getNodeParameter.mockImplementation(
    (parameterName: string, itemIndex: number, fallbackValue?: any, options?: IGetNodeParameterOptions) => {
      if (parameterName === 'operation' && itemIndex === 0) {
        return 'getToolDescription';
      }
      if (parameterName === 'includeOperations' && itemIndex === 0) {
        return ['person', 'company', 'task', 'note', 'opportunity'];
      }
      if (parameterName === 'detailLevel' && itemIndex === 0) {
        return 'basic';
      }
      return fallbackValue;
    }
  );

  instance.getInputData.mockReturnValue([{ json: {} }]);

  instance.helpers = {
    returnJsonArray: (items: IDataObject | IDataObject[]): INodeExecutionData[] => {
      if (!Array.isArray(items)) {
        items = [items];
      }
      
      return items.map((item) => ({
        json: item,
      }));
    },
    constructExecutionMetaData: (data: INodeExecutionData[], options: { itemData: { item: number } }) => {
      return data;
    },
  } as any;

  return instance;
};

export const mockApiRequest = jest.fn().mockImplementation(async (method, endpoint, body, qs) => {
  // Mock API responses based on endpoint and method
  if (endpoint === '/persons' && method === 'GET') {
    return { data: [{ id: 'person-1', name: { firstName: 'John', lastName: 'Doe' } }] };
  }
  
  if (endpoint === '/companies' && method === 'GET') {
    return { data: [{ id: 'company-1', name: 'Acme Inc' }] };
  }
  
  return {};
});