const progressSchema = {
  title: 'Progress item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['progress', 'value', 'total', 'children', 'color'],
    },
  ],
  properties: {
    progress: {
      title: 'Show progress',
      type: 'boolean',
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

export default {
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
