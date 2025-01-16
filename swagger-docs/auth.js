//Auth swagger
const authDocs = {
  '/auth/login': {
    post: {
      summary: 'Login and get a token',
      description: 'Public endpoint to log in and retrieve a JWT token.',
      tags: ["Casino"],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: { type: 'string', default: 'admin' },
                password: { type: 'string', default: '5678'},
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Successfully logged in',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: { type: 'string' },
                  message: { type: 'string' },
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

export default authDocs;  