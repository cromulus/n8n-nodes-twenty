import type { INodeExecutionData, IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class TwentySystem implements INodeType {
    description: INodeTypeDescription & {
        usableAsTool?: boolean;
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
