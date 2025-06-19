"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskTargetFields = exports.taskTargetOperations = void 0;
exports.taskTargetOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'taskTarget',
                ],
            },
        },
        options: [
            {
                name: 'Create Many Task Targets',
                value: 'createManyTaskTargets',
                action: 'Create many task targets',
            },
            {
                name: 'Create One Task Target',
                value: 'createOneTaskTarget',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **taskTargets**',
                action: 'Create one task target',
            },
            {
                name: 'Delete One Task Target',
                value: 'deleteOneTaskTarget',
                description: '**depth** can be provided to request your **taskTarget**',
                action: 'Delete one task target',
            },
            {
                name: 'Find Many Task Targets',
                value: 'findManyTaskTargets',
                description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **taskTargets**',
                action: 'Find many task targets',
            },
            {
                name: 'Find One Task Target',
                value: 'findOneTaskTarget',
                description: '**depth** can be provided to request your **taskTarget**',
                action: 'Find one task target',
            },
            {
                name: 'Find Task Target Duplicates',
                value: 'findTaskTargetDuplicates',
                description: '**depth** can be provided to request your **taskTarget**',
                action: 'Find task target duplicates',
            },
            {
                name: 'Update One Task Target',
                value: 'updateOneTaskTarget',
                description: '**depth** can be provided to request your **taskTarget**',
                action: 'Update one task target',
            },
        ],
        default: 'createManyTaskTargets',
    },
];
exports.taskTargetFields = [
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
                    'taskTarget',
                ],
                operation: [
                    'createManyTaskTargets',
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
                    'taskTarget',
                ],
                operation: [
                    'createManyTaskTargets',
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
                    'taskTarget',
                ],
                operation: [
                    'createManyTaskTargets',
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
                    'taskTarget',
                ],
                operation: [
                    'createOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'createOneTaskTarget',
                ],
            },
        },
        options: [
            {
                displayName: 'Company ID',
                name: 'companyId',
                type: 'string',
                default: '',
                description: 'TaskTarget company ID foreign key',
            },
            {
                displayName: 'Opportunity ID',
                name: 'opportunityId',
                type: 'string',
                default: '',
                description: 'TaskTarget opportunity ID foreign key',
            },
            {
                displayName: 'Person ID',
                name: 'personId',
                type: 'string',
                default: '',
                description: 'TaskTarget person ID foreign key',
            },
            {
                displayName: 'Task ID',
                name: 'taskId',
                type: 'string',
                default: '',
                description: 'TaskTarget task ID foreign key',
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
                    'taskTarget',
                ],
                operation: [
                    'createOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'deleteOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'deleteOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'findManyTaskTargets',
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
                    'taskTarget',
                ],
                operation: [
                    'findManyTaskTargets',
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
                    'taskTarget',
                ],
                operation: [
                    'findOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'findOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'findOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'findTaskTargetDuplicates',
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
                    'taskTarget',
                ],
                operation: [
                    'findTaskTargetDuplicates',
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
                                displayName: 'Task ID',
                                name: 'taskId',
                                type: 'string',
                                default: '',
                                description: 'TaskTarget task ID foreign key',
                            },
                            {
                                displayName: 'Person ID',
                                name: 'personId',
                                type: 'string',
                                default: '',
                                description: 'TaskTarget person ID foreign key',
                            },
                            {
                                displayName: 'Company ID',
                                name: 'companyId',
                                type: 'string',
                                default: '',
                                description: 'TaskTarget company ID foreign key',
                            },
                            {
                                displayName: 'Opportunity ID',
                                name: 'opportunityId',
                                type: 'string',
                                default: '',
                                description: 'TaskTarget opportunity ID foreign key',
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
                    'taskTarget',
                ],
                operation: [
                    'findTaskTargetDuplicates',
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
                    'taskTarget',
                ],
                operation: [
                    'updateOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'updateOneTaskTarget',
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
                    'taskTarget',
                ],
                operation: [
                    'updateOneTaskTarget',
                ],
            },
        },
        options: [
            {
                displayName: 'Company ID',
                name: 'companyId',
                type: 'string',
                default: '',
                description: 'TaskTarget company ID foreign key',
            },
            {
                displayName: 'Opportunity ID',
                name: 'opportunityId',
                type: 'string',
                default: '',
                description: 'TaskTarget opportunity ID foreign key',
            },
            {
                displayName: 'Person ID',
                name: 'personId',
                type: 'string',
                default: '',
                description: 'TaskTarget person ID foreign key',
            },
            {
                displayName: 'Task ID',
                name: 'taskId',
                type: 'string',
                default: '',
                description: 'TaskTarget task ID foreign key',
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
                    'taskTarget',
                ],
                operation: [
                    'updateOneTaskTarget',
                ],
            },
        },
    },
];
//# sourceMappingURL=TaskTargetDescription.js.map