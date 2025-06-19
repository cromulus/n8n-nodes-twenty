"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewFieldFields = exports.viewFieldOperations = void 0;
exports.viewFieldOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'viewField',
                ],
            },
        },
        options: [
            {
                name: 'Create Many View Fields',
                value: 'createManyViewFields',
                action: 'Create many view fields',
            },
            {
                name: 'Create One View Field',
                value: 'createOneViewField',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFields**',
                action: 'Create one view field',
            },
            {
                name: 'Delete One View Field',
                value: 'deleteOneViewField',
                description: '**depth** can be provided to request your **viewField**',
                action: 'Delete one view field',
            },
            {
                name: 'Find Many View Fields',
                value: 'findManyViewFields',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFields**',
                action: 'Find many view fields',
            },
            {
                name: 'Find One View Field',
                value: 'findOneViewField',
                description: '**depth** can be provided to request your **viewField**',
                action: 'Find one view field',
            },
            {
                name: 'Find View Field Duplicates',
                value: 'findViewFieldDuplicates',
                description: '**depth** can be provided to request your **viewField**',
                action: 'Find view field duplicates',
            },
            {
                name: 'Update One View Field',
                value: 'updateOneViewField',
                description: '**depth** can be provided to request your **viewField**',
                action: 'Update one view field',
            },
        ],
        default: 'createManyViewFields',
    },
];
exports.viewFieldFields = [
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
                    'viewField',
                ],
                operation: [
                    'createManyViewFields',
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
                    'viewField',
                ],
                operation: [
                    'createManyViewFields',
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
                    'viewField',
                ],
                operation: [
                    'createManyViewFields',
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
                    'viewField',
                ],
                operation: [
                    'createOneViewField',
                ],
            },
        },
    },
    {
        displayName: 'Field Metadata ID',
        name: 'fieldMetadataId',
        description: 'View Field target field',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'viewField',
                ],
                operation: [
                    'createOneViewField',
                ],
            },
        },
    },
    {
        displayName: 'View ID',
        name: 'viewId',
        description: 'View Field related view ID foreign key',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'viewField',
                ],
                operation: [
                    'createOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'createOneViewField',
                ],
            },
        },
        options: [
            {
                displayName: 'Aggregate Operation',
                name: 'aggregateOperation',
                type: 'options',
                default: 'AVG',
                description: 'Optional aggregate operation',
                options: [
                    {
                        name: 'Avg',
                        value: 'AVG',
                    },
                    {
                        name: 'Count',
                        value: 'COUNT',
                    },
                    {
                        name: 'Count Empty',
                        value: 'COUNT_EMPTY',
                    },
                    {
                        name: 'Count Not Empty',
                        value: 'COUNT_NOT_EMPTY',
                    },
                    {
                        name: 'Count Unique Values',
                        value: 'COUNT_UNIQUE_VALUES',
                    },
                    {
                        name: 'Max',
                        value: 'MAX',
                    },
                    {
                        name: 'Min',
                        value: 'MIN',
                    },
                    {
                        name: 'Percentage Empty',
                        value: 'PERCENTAGE_EMPTY',
                    },
                    {
                        name: 'Percentage Not Empty',
                        value: 'PERCENTAGE_NOT_EMPTY',
                    },
                    {
                        name: 'Sum',
                        value: 'SUM',
                    },
                ],
            },
            {
                displayName: 'Is Visible',
                name: 'isVisible',
                type: 'boolean',
                default: false,
                description: 'Whether field is visible',
            },
            {
                displayName: 'Position',
                name: 'position',
                type: 'number',
                default: 0,
                description: 'View Field position',
            },
            {
                displayName: 'Size',
                name: 'size',
                type: 'number',
                default: 0,
                description: 'View Field size',
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
                    'viewField',
                ],
                operation: [
                    'createOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'deleteOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'deleteOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'findManyViewFields',
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
                    'viewField',
                ],
                operation: [
                    'findManyViewFields',
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
                    'viewField',
                ],
                operation: [
                    'findOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'findOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'findOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'findViewFieldDuplicates',
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
                    'viewField',
                ],
                operation: [
                    'findViewFieldDuplicates',
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
                                displayName: 'Field Metadata ID',
                                name: 'fieldMetadataId',
                                type: 'string',
                                default: '',
                                description: 'View Field target field',
                            },
                            {
                                displayName: 'Is Visible',
                                name: 'isVisible',
                                type: 'boolean',
                                default: false,
                                description: 'Whether field is visible',
                            },
                            {
                                displayName: 'Size',
                                name: 'size',
                                type: 'number',
                                default: 0,
                                description: 'View Field size',
                            },
                            {
                                displayName: 'Position',
                                name: 'position',
                                type: 'number',
                                default: 0,
                                description: 'View Field position',
                            },
                            {
                                displayName: 'Aggregate Operation',
                                name: 'aggregateOperation',
                                type: 'options',
                                options: [
                                    {
                                        name: 'Avg',
                                        value: 'AVG',
                                    },
                                    {
                                        name: 'Count',
                                        value: 'COUNT',
                                    },
                                    {
                                        name: 'Count Empty',
                                        value: 'COUNT_EMPTY',
                                    },
                                    {
                                        name: 'Count Not Empty',
                                        value: 'COUNT_NOT_EMPTY',
                                    },
                                    {
                                        name: 'Count Unique Values',
                                        value: 'COUNT_UNIQUE_VALUES',
                                    },
                                    {
                                        name: 'Max',
                                        value: 'MAX',
                                    },
                                    {
                                        name: 'Min',
                                        value: 'MIN',
                                    },
                                    {
                                        name: 'Percentage Empty',
                                        value: 'PERCENTAGE_EMPTY',
                                    },
                                    {
                                        name: 'Percentage Not Empty',
                                        value: 'PERCENTAGE_NOT_EMPTY',
                                    },
                                    {
                                        name: 'Sum',
                                        value: 'SUM',
                                    },
                                ],
                                default: 'AVG',
                                description: 'Optional aggregate operation',
                            },
                            {
                                displayName: 'View ID',
                                name: 'viewId',
                                type: 'string',
                                default: '',
                                description: 'View Field related view ID foreign key',
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
                    'viewField',
                ],
                operation: [
                    'findViewFieldDuplicates',
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
                    'viewField',
                ],
                operation: [
                    'updateOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'updateOneViewField',
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
                    'viewField',
                ],
                operation: [
                    'updateOneViewField',
                ],
            },
        },
        options: [
            {
                displayName: 'Aggregate Operation',
                name: 'aggregateOperation',
                type: 'options',
                default: 'AVG',
                description: 'Optional aggregate operation',
                options: [
                    {
                        name: 'Avg',
                        value: 'AVG',
                    },
                    {
                        name: 'Count',
                        value: 'COUNT',
                    },
                    {
                        name: 'Count Empty',
                        value: 'COUNT_EMPTY',
                    },
                    {
                        name: 'Count Not Empty',
                        value: 'COUNT_NOT_EMPTY',
                    },
                    {
                        name: 'Count Unique Values',
                        value: 'COUNT_UNIQUE_VALUES',
                    },
                    {
                        name: 'Max',
                        value: 'MAX',
                    },
                    {
                        name: 'Min',
                        value: 'MIN',
                    },
                    {
                        name: 'Percentage Empty',
                        value: 'PERCENTAGE_EMPTY',
                    },
                    {
                        name: 'Percentage Not Empty',
                        value: 'PERCENTAGE_NOT_EMPTY',
                    },
                    {
                        name: 'Sum',
                        value: 'SUM',
                    },
                ],
            },
            {
                displayName: 'Field Metadata ID',
                name: 'fieldMetadataId',
                type: 'string',
                default: '',
                description: 'View Field target field',
            },
            {
                displayName: 'Is Visible',
                name: 'isVisible',
                type: 'boolean',
                default: false,
                description: 'Whether field is visible',
            },
            {
                displayName: 'Position',
                name: 'position',
                type: 'number',
                default: 0,
                description: 'View Field position',
            },
            {
                displayName: 'Size',
                name: 'size',
                type: 'number',
                default: 0,
                description: 'View Field size',
            },
            {
                displayName: 'View ID',
                name: 'viewId',
                type: 'string',
                default: '',
                description: 'View Field related view ID foreign key',
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
                    'viewField',
                ],
                operation: [
                    'updateOneViewField',
                ],
            },
        },
    },
];
//# sourceMappingURL=ViewFieldDescription.js.map