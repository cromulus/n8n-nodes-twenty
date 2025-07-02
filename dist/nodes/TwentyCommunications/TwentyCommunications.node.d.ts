import type { INodeExecutionData, IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class TwentyCommunications implements INodeType {
    description: INodeTypeDescription & {
        usableAsTool?: boolean;
        schema?: any;
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
