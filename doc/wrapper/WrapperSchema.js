const graphQLMDWrapper = {
  title: {
    wrapper: '# %s',
    APItype: {
      wrapper: '## APIType: %s',
      searchFunction: {
        wrapper: '### %s',
        arguments: {
          wrapper: '* Arguments',
          argument: {
            wrapper: '  * %s [%s](#type-%s)',
            comment: {
              wrapper: '     > %s',
            },
          },
        },
        return: {
          wrapper: '* Return: ![%s](#type-%s)',
        },
      },
    },
    types: {
      wrapper: '## %s',
      type: {
        wrapper: '### type %s',
        properties: {
          wrapper: '* %s',
          required: {
            wrapper: '  * required: %s',
          },
          type: {
            wrapper: '  * type: [%s](#type-%s)',
          },
          isArray: {
            wrapper: '  * isArray: %s',
          },
          enum: {
            wrapper: '  * enum: %s',
          },
          others: {
            wrapper: '  * %s: %s',
          },
          arguments: {
            wrapper: '  * %s',
            argument: {
              wrapper: '      * %s',
              type: {
                wrapper: '         > type: [%s](#type-%s)',
              },
              isArray: {
                wrapper: '         > isArray: %s',
              },
              others: {
                wrapper: '         > %s: %s',
              },
            },
          },
        },
      },
    },
  },
};

const importMdWrapper = {
  title: {
    wrapper: '# %s',
    properties: {
      wrapper: '## %s',
      type: {
        wrapper: '### Type: %s',
      },
      property: {
        wrapper: '### %s',
        type: {
          wrapper: '* Type: %s',
        },
        description: {
          wrapper: '* Description: %s',
        },
        pattern: {
          wrapper: '* Pattern: %s',
        },
        required: {
          wrapper: '* required: %s',
        },
      },
    },
  },
};

module.exports = { graphQLMDWrapper, importMdWrapper };
