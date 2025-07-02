import type { INodeExecutionData, IExecuteFunctions, INodeType, INodeTypeDescription, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
export declare class TwentyCrmCore implements INodeType {
    description: INodeTypeDescription & {
        usableAsTool?: boolean;
        schema?: any;
    };
    methods: {
        listSearch: {
            searchResources(this: ILoadOptionsFunctions): Promise<INodeListSearchResult>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
