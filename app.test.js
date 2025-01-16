import request from 'supertest';
import app from './index.js';
import * as authModel from './models/auth.js';

const user = process.env.USERLOGIN;
const pass = process.env.PASSWORDLOGIN;
const data = authModel.login(user, pass);
const CHERRY = process.env.CHERRY;
const LEMON = process.env.LEMON;

describe('Check token middleware', () => {
    test('GET /currency without token should return 403', async () => {
        const response = await request(app).get('/currency');
        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: 'Access Denied: No Token Provided!' });
      });

    test('GET /currency with wrong token should return 401', async () => {
        const response = await request(app).get('/currency').set('Authorization', 'Bearer valid-token');
        expect(response.status).toBe(403);
        expect(response.body).toEqual({ message: 'Unauthorized' });
      });

      test('GET /currency with a valid token should return 200', async () => {
        const response = await request(app)
          .get('/currency')
          .set('Authorization', `Bearer ${data.token}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ data : expect.any(Object) });
      });
});

describe('Check login', () => {
    test('POST /auth/login with a valid user and password should return 200', async () => {
        const user = process.env.USERLOGIN;
        const pass = process.env.PASSWORDLOGIN;
        const response = await request(app)
          .post('/auth/login').send({ username: user, password: pass });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ token : expect.any(String), message: 'Login successful' });
    });

    test('POST /auth/login with an invalid user or password should return 401', async () => {
        const response = await request(app)
          .post('/auth/login').send({ username: "test", password: "1234" });
        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: 'Invalid credentials' });
    });

    test('POST /auth/login with an invalid body request should return 400', async () => {
        const response = await request(app)
          .post('/auth/login').send({ msg: "hi" });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({errors: expect.any(Array)});
    });
});

describe('Check games', () => {
    test('Get /games should return an object with games', async () => {
        const response = await request(app)
          .get('/games')
          .set('Authorization', `Bearer ${data.token}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ games : expect.any(Array) });
    });

    test('Get /games a game should have specific properties', async () => {
        const response = await request(app)
          .get('/games')
          .set('Authorization', `Bearer ${data.token}`);
        const game = response.body.games[0]; 
        expect(response.status).toBe(200);
        expect(game).toEqual({ 
            id : expect.any(String), 
            slug : expect.any(String), 
            title : expect.any(String), 
            providerName : expect.any(String), 
            thumb : expect.any(Object), 
        });
    });

});

describe('Check Calculate', () => {
    test('PUT /slot-machine send three cherries with 1 balance coin should return 50 coins and won: true', async () => {
        const response = await request(app)
          .put('/slot-machine')
          .set('Authorization', `Bearer ${data.token}`)
          .send({ result: [CHERRY, CHERRY, CHERRY], coins: 1 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            parameters:{ 
                text : expect.any(String),
                coins: 50,
                won: true 
            }
        }
        );
    });

    test('PUT /slot-machine send lemon lemon cherry with 2 balance coin should return 1 coins and won: false', async () => {
        const response = await request(app)
          .put('/slot-machine')
          .set('Authorization', `Bearer ${data.token}`)
          .send({ result: [LEMON, LEMON, CHERRY], coins: 2 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            parameters:{ 
                text : expect.any(String),
                coins: 1,
                won: false 
            }
        }
        );
    });

    test('PUT /slot-machine send invalid body request should return status 400', async () => {
        const response = await request(app)
          .put('/slot-machine')
          .set('Authorization', `Bearer ${data.token}`)
          .send({ msg: "hi" });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({errors: expect.any(Array)});
    });

});