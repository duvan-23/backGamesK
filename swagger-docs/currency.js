//Currency swagger
const currencyDocs = {
  '/currency': {
    get: {
      summary: 'get currency values',
      description: 'Endpoint to get currency values from an external api',
      tags: ["Casino"],
      responses: {
        200: {
          description: 'Successfully get currency values',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: { type: 'object' }
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default currencyDocs;  