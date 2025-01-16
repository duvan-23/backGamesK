//Slot machine swagger
const slotMachineDocs = {
  '/slot-machine': {
    get: {
      summary: 'get parameters',
      description: 'Endpoint to get slot machine parameters.',
      tags: ["Casino"],
      responses: {
        200: {
          description: 'Successfully get parameters',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  parameters: { 
                      type: 'object',
                      properties: {
                        reels: { 
                          type: 'array',
                          items: { type: 'string' }
                        },
                        coins: { type: 'string' },
                        fruits: { 
                          type: 'array',
                          items: { type: 'string' } 
                        },
                      }
                  }
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
  '/slot-machine': {
    put: {
      summary: 'calculate result',
      description: 'Endpoint to calculate if you win or lose and return the result.',
      tags: ["Casino"],
      requestBody: {
        required: true,
        content: {
        'application/json': {
            schema: {
            type: 'object',
            properties: {
              result: { 
                type: 'array',
                items: { 
                  type: 'string', 
                  default: ['🍋', '🍋', '🍋'] 
                }
              },
              coins: { type: 'number', default: 10},
            },
            },
        },
        },
      },
      responses: {
        200: {
          description: 'Successfully calculate result',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  parameters: { 
                    type: 'object',
                  properties: {
                    text: { type: 'string' },
                    coins: { type: 'number' },
                    won: { type: 'boolean' },
                  }
                  }
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

export default slotMachineDocs;  