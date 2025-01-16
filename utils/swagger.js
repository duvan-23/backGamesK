import 'dotenv/config';
import authDocs from '../swagger-docs/auth.js';
import currencyDocs from '../swagger-docs/currency.js';
import gamesDocs from '../swagger-docs/games.js';
import slotMachineDocs from '../swagger-docs/slot-machine.js';
// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Express API with JWT Authentication',
    },
    paths: {
      ...authDocs,
      ...currencyDocs,
      ...gamesDocs,
      ...slotMachineDocs
    },
    tags: [
      {
        name: "Casino",
        description: "Operations related to casino website",
      },
    ],
    servers: [
      {
        url: process.env.URLSERVER,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [], 
};

export default swaggerOptions;