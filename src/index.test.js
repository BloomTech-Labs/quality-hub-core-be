const request = require('supertest');
const app = require('./server');
describe('me', () => {
  it('should return an error if the user is not logged in', async () => {
    const server = app.createHttpServer({});
    const response = await request(server)
            .post('/')
            .send({
              query: 'query { info } '
            });
    expect(JSON.parse(response.text).data.info).toBe('Welcome to Quality Hub')
  })
});