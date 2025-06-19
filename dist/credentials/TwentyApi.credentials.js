"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwentyApi = void 0;
class TwentyApi {
    constructor() {
        this.name = 'twentyApi';
        this.displayName = 'Twenty API';
        this.properties = [
            {
                displayName: 'API key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{"Bearer " + $credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials?.domain}}',
                url: '/open-api/core',
            },
        };
    }
}
exports.TwentyApi = TwentyApi;
//# sourceMappingURL=TwentyApi.credentials.js.map