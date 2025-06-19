"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalFields = exports.generalOperations = void 0;
exports.generalOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'general',
                ],
            },
        },
        options: [
            {
                name: 'Get Open Api Schema',
                value: 'getOpenApiSchema',
                description: 'Retrieve the OpenAPI schema for the Twenty CRM API. This provides detailed information about all available endpoints, data models, and field definitions.',
                action: 'Get open api schema',
            },
        ],
        default: 'getOpenApiSchema',
    },
];
exports.generalFields = [
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'general',
                ],
                operation: [
                    'getOpenApiSchema',
                ],
            },
        },
    },
];
//# sourceMappingURL=GeneralDescription.js.map