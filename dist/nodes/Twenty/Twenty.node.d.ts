import type { INodeExecutionData, IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class Twenty implements INodeType {
    description: INodeTypeDescription & {
        usableAsTool?: boolean;
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
