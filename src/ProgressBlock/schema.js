const progressSchema = {
  title: 'Progress item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'progress',
        'indicating',
        'state',
        'value',
        'total',
        'children',
        'color',
      ],
    },
  ],
  properties: {
    progress: {
      title: 'Show progress',
      type: 'boolean',
    },
    indicating: {
      title:
        'An indicating progress bar visually indicates the current level of progress of a task',
      type: 'boolean',
    },
    state: {
      title: 'State',
      description: 'A progress bar can show a specific state',
      choices: [
        ['success', 'Success'],
        ['warning', 'Warning'],
        ['error', 'Error'],
      ],
    },

    value: {
      title: 'Value',
      type: 'number',
      minimum: 0,
      description:
        'For use with total. Together, these will calculate the percent. Mutually excludes percent',
    },
    total: {
      title: 'Total',
      type: 'number',
      minimum: 0,
      description:
        'For use with value. Together, these will calculate the percent. Mutually excludes percent',
    },
    children: {
      title: 'Label',
      widget: 'textarea',
    },
    color: {
      title: 'Color',
      defaultValue: 'blue',
      choices: [
        ['red', 'Red'],
        ['orange', 'Orange'],
        ['yellow', 'Yellow'],
        ['olive', 'Olive'],
        ['green', 'Green'],
        ['teal', 'Teal'],
        ['blue', 'Blue'],
        ['violet', 'Violet'],
        ['purple', 'Purple'],
        ['pink', 'Pink'],
        ['brown', 'Brown'],
        ['grey', 'Grey'],
        ['black', 'Black'],
      ],
    },
  },
  required: [],
};

const schema = {
  title: 'Progress block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['gridSize', 'items'],
    },
  ],

  properties: {
    gridSize: {
      title: 'Grid Size',
      choices: [
        ['one', 'One'],
        ['two', 'Two'],
        ['three', 'Three'],
        ['four', 'Four'],
      ],
      factory: 'Choice',
      type: 'string',
    },
    items: {
      title: 'Progress items',
      widget: 'object_list',
      schema: progressSchema,
    },
  },

  required: [],
};

export default schema;
