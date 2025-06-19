"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twentyApiRequest = twentyApiRequest;
const n8n_workflow_1 = require("n8n-workflow");
async function twentyApiRequest(method, endpoint, body = {}, qs = {}, path = '/rest') {
    const credentials = await this.getCredentials('twentyApi');
    if (credentials === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No credentials returned!');
    }
    const options = {
        method,
        body,
        qs,
        uri: `${credentials.domain}${path}${endpoint}`,
        json: true,
    };
    if (!Object.keys(body).length) {
        delete options.body;
    }
    if (!Object.keys(qs).length) {
        delete options.qs;
    }
    try {
        return await this.helpers.requestWithAuthentication.call(this, 'twentyApi', options);
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
//# sourceMappingURL=GenericFunctions.js.map