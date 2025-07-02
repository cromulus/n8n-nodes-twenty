import type { IExecuteFunctions } from 'n8n-workflow';
export interface ResourceInfo {
    name: string;
    value: string;
    description: string;
    endpoint: string;
    category: 'crm' | 'tasks' | 'communications' | 'system';
}
export interface OperationInfo {
    name: string;
    value: string;
    description: string;
    action: string;
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}
export declare class ResourceDiscovery {
    private static fetchOpenApiSchema;
    private static extractResourcesFromSchema;
    private static createResourceInfo;
    static discoverResources(context: IExecuteFunctions): Promise<ResourceInfo[]>;
    static discoverResourcesByCategory(context: IExecuteFunctions, category: 'crm' | 'tasks' | 'communications' | 'system'): Promise<ResourceInfo[]>;
    private static getFallbackResources;
    static getStandardOperations(): OperationInfo[];
}
