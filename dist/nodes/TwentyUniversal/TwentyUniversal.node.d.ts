import type { INodeExecutionData, IExecuteFunctions, INodeType, INodeTypeDescription, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
export declare class TwentyUniversal implements INodeType {
    description: INodeTypeDescription & {
        usableAsTool?: boolean;
    };
    methods: {
        listSearch: {
            searchAllResources(this: ILoadOptionsFunctions): Promise<INodeListSearchResult>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
