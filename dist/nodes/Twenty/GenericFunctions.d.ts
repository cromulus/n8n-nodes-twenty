import { IDataObject, IExecuteFunctions, IHttpRequestMethods } from 'n8n-workflow';
export declare function twentyApiRequest(this: IExecuteFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject, path?: string): Promise<any>;
