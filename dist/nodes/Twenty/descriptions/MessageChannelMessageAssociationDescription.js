"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageChannelMessageAssociationFields = exports.messageChannelMessageAssociationOperations = void 0;
exports.messageChannelMessageAssociationOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
            },
        },
        options: [
            {
                name: 'Create Many Message Channel Message Associations',
                value: 'createManyMessageChannelMessageAssociations',
                action: 'Create many message channel message associations',
            },
            {
                name: 'Create One Message Channel Message Association',
                value: 'createOneMessageChannelMessageAssociation',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannelMessageAssociations**',
                action: 'Create one message channel message association',
            },
            {
                name: 'Delete One Message Channel Message Association',
                value: 'deleteOneMessageChannelMessageAssociation',
                description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
                action: 'Delete one message channel message association',
            },
            {
                name: 'Find Many Message Channel Message Associations',
                value: 'findManyMessageChannelMessageAssociations',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannelMessageAssociations**',
                action: 'Find many message channel message associations',
            },
            {
                name: 'Find Message Channel Message Association Duplicates',
                value: 'findMessageChannelMessageAssociationDuplicates',
                description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
                action: 'Find message channel message association duplicates',
            },
            {
                name: 'Find One Message Channel Message Association',
                value: 'findOneMessageChannelMessageAssociation',
                description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
                action: 'Find one message channel message association',
            },
            {
                name: 'Update One Message Channel Message Association',
                value: 'updateOneMessageChannelMessageAssociation',
                description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
                action: 'Update one message channel message association',
            },
        ],
        default: 'createManyMessageChannelMessageAssociations',
    },
];
exports.messageChannelMessageAssociationFields = [
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createManyMessageChannelMessageAssociations',
                ],
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createManyMessageChannelMessageAssociations',
                ],
            },
        },
        options: [],
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createManyMessageChannelMessageAssociations',
                ],
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createOneMessageChannelMessageAssociation',
                ],
            },
        },
        options: [
            {
                displayName: 'Direction',
                name: 'direction',
                type: 'options',
                default: 'INCOMING',
                description: 'Message Direction',
                options: [
                    {
                        name: 'Incoming',
                        value: 'INCOMING',
                    },
                    {
                        name: 'Outgoing',
                        value: 'OUTGOING',
                    },
                ],
            },
            {
                displayName: 'Message Channel ID',
                name: 'messageChannelId',
                type: 'string',
                default: '',
                description: 'Message Channel ID foreign key',
            },
            {
                displayName: 'Message External ID',
                name: 'messageExternalId',
                type: 'string',
                default: '',
                description: 'Message ID from the messaging provider',
            },
            {
                displayName: 'Message ID',
                name: 'messageId',
                type: 'string',
                default: '',
                description: 'Message ID foreign key',
            },
            {
                displayName: 'Message Thread External ID',
                name: 'messageThreadExternalId',
                type: 'string',
                default: '',
                description: 'Thread ID from the messaging provider',
            },
        ],
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'createOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'ID',
        name: 'id',
        description: 'Object ID',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'deleteOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'deleteOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
            {
                displayName: 'Ending Before',
                name: 'ending_before',
                type: 'string',
                default: '',
                description: 'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
            },
            {
                displayName: 'Filter',
                name: 'filter',
                type: 'string',
                default: '',
                description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **containsAny**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                typeOptions: {
                    minValue: 1,
                },
                default: 50,
                description: 'Max number of results to return',
            },
            {
                displayName: 'Order By',
                name: 'order_by',
                type: 'string',
                default: '',
                description: 'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
            },
            {
                displayName: 'Starting After',
                name: 'starting_after',
                type: 'string',
                default: '',
                description: 'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findManyMessageChannelMessageAssociations',
                ],
            },
        },
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findManyMessageChannelMessageAssociations',
                ],
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findMessageChannelMessageAssociationDuplicates',
                ],
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findMessageChannelMessageAssociationDuplicates',
                ],
            },
        },
        options: [
            {
                displayName: 'Data',
                name: 'data',
                placeholder: 'Add Data Field',
                type: 'fixedCollection',
                default: {},
                options: [{
                        displayName: 'Data Fields',
                        name: 'dataFields',
                        values: [
                            {
                                displayName: 'Message External ID',
                                name: 'messageExternalId',
                                type: 'string',
                                default: '',
                                description: 'Message ID from the messaging provider',
                            },
                            {
                                displayName: 'Message Thread External ID',
                                name: 'messageThreadExternalId',
                                type: 'string',
                                default: '',
                                description: 'Thread ID from the messaging provider',
                            },
                            {
                                displayName: 'Direction',
                                name: 'direction',
                                type: 'options',
                                options: [
                                    {
                                        name: 'Incoming',
                                        value: 'INCOMING',
                                    },
                                    {
                                        name: 'Outgoing',
                                        value: 'OUTGOING',
                                    },
                                ],
                                default: 'INCOMING',
                                description: 'Message Direction',
                            },
                            {
                                displayName: 'Message Channel ID',
                                name: 'messageChannelId',
                                type: 'string',
                                default: '',
                                description: 'Message Channel ID foreign key',
                            },
                            {
                                displayName: 'Message ID',
                                name: 'messageId',
                                type: 'string',
                                default: '',
                                description: 'Message ID foreign key',
                            },
                        ]
                    }],
            },
        ],
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findMessageChannelMessageAssociationDuplicates',
                ],
            },
        },
    },
    {
        displayName: 'ID',
        name: 'id',
        description: 'Object ID',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'findOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'ID',
        name: 'id',
        description: 'Object ID',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'updateOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'collection',
        placeholder: 'Add Query',
        options: [
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'options',
                options: [
                    {
                        name: '0',
                        value: '0',
                    },
                    {
                        name: '1',
                        value: '1',
                    },
                    {
                        name: '2',
                        value: '2',
                    },
                ],
                default: '1',
                description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
            },
        ],
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'updateOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'updateOneMessageChannelMessageAssociation',
                ],
            },
        },
        options: [
            {
                displayName: 'Direction',
                name: 'direction',
                type: 'options',
                default: 'INCOMING',
                description: 'Message Direction',
                options: [
                    {
                        name: 'Incoming',
                        value: 'INCOMING',
                    },
                    {
                        name: 'Outgoing',
                        value: 'OUTGOING',
                    },
                ],
            },
            {
                displayName: 'Message Channel ID',
                name: 'messageChannelId',
                type: 'string',
                default: '',
                description: 'Message Channel ID foreign key',
            },
            {
                displayName: 'Message External ID',
                name: 'messageExternalId',
                type: 'string',
                default: '',
                description: 'Message ID from the messaging provider',
            },
            {
                displayName: 'Message ID',
                name: 'messageId',
                type: 'string',
                default: '',
                description: 'Message ID foreign key',
            },
            {
                displayName: 'Message Thread External ID',
                name: 'messageThreadExternalId',
                type: 'string',
                default: '',
                description: 'Thread ID from the messaging provider',
            },
        ],
    },
    {
        displayName: 'Scope',
        name: 'scope',
        type: 'hidden',
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'messageChannelMessageAssociation',
                ],
                operation: [
                    'updateOneMessageChannelMessageAssociation',
                ],
            },
        },
    },
];
//# sourceMappingURL=MessageChannelMessageAssociationDescription.js.map