//Games swagger
const gamesDocs = {
  '/games': {
    get: {
      summary: 'get games',
      description: 'Endpoint to get all games.',
      tags: ["Casino"],
      responses: {
        200: {
          description: 'Successfully get games',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  games: { 
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        slug: { type: 'string' },
                        title: { type: 'string' },
                        providerName: { type: 'string' },
                        thum: { 
                          type: 'object',
                          properties: {
                            url: { type: 'string' }
                          },
                        }
                      }
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
  '/games/{title}': {
    get: {
      summary: 'get games filtered by title',
      description: 'Endpoint to get all games  filtered by title.',
      tags: ["Casino"],
      parameters:[
        {
          in: 'path',
          name: 'title',
          required: true,
          schema:{
            type: 'string',
          },
          description: 'Title of the game'
        }
      ],
      responses: {
        200: {
          description: 'Successfully get games filtered by title',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  games: { 
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        slug: { type: 'string' },
                        title: { type: 'string' },
                        providerName: { type: 'string' },
                        thum: { 
                          type: 'object',
                          properties: {
                            url: { type: 'string' }
                          },
                        }
                      }
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

export default gamesDocs;  