require('dotenv').config();
const request = require('supertest');
const app = require('./server');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrMnh0ZXB4aDAwbmgwNzcydHpyZDJyc28iLCJlbWFpbCI6ImxhYnMxOC5xdWFsaXR5aHViQGdtYWlsLmNvbSIsImlhdCI6MTU3MzgzNjM5NCwiZXhwIjoxNTczODc5NTk0fQ.ljiD_6cMwZDMZiy3xlEYC6swt4Ea_1-GIxZGrdT_PV4';

describe('me', () => {
    it('returns a truthy response for the me query', async () => {
      const server = app.createHttpServer({});
      const response = await request(server)
              .post('/')
              .set({Authorization: token})
              .send({
                query: 'query { me { first_name last_name } } '
              });
              console.log(response.body); 
      expect(JSON.parse(response.text).data.me).toBeTruthy()
    })
  });
  
  describe('login', () => {
      it('should return an error if the log in is not successful', async () => {
        const server = app.createHttpServer({});
        const response = await request(server)
                .post('/')
                .send({
                  query: `
                  mutation { 
                    login(email:"labs18.qualityhub@gmail.com", password: "welovequails18") 
                    {
                      token
                    } 
                  } 
                  `
                });
                console.log(response.body.data.login);
                expect(response.body.data).toBeTruthy()
            })
    });

describe('user', () => {
    it('returns data when the user is queried', async () => {
      const server = app.createHttpServer({});
      const response = await request(server)
              .post('/')
              .set({Authorization: token})
              .send({
                query: 'query { user(id: "ck2vf69l000880706ae5n4ze0") { first_name last_name } } '
              });
              console.log(response.body); 


      expect(response.body.data).toBeTruthy()
    })
  });


describe('industries', () => {
    it('returns data when the industries is queried', async () => {
      const server = app.createHttpServer({});
      const response = await request(server)
              .post('/')
              .set({Authorization: token})
              .send({
                query: 'query { industries{ name } } '
              });
              console.log(response.body); 
              expect(response.body).toBeTruthy()

    })
  });


describe('users', () => {
    it('returns array when users is queried', async () => {
      const server = app.createHttpServer({});
      const response = await request(server)
              .post('/')
              .set({Authorization: token})
              .send({
                query: `query {
                     users{
                         first_name 
                     }
                    } `
              });
              console.log(response.body); 
              expect(response.body).toBeTruthy()
    })

  });

  describe('signup', () => {
          it('should return an error if the user is not logged in', async () => {
            const server = app.createHttpServer({});
            const response = await request(server)
                    .post('/')
                    // .set({Authorization:token})
                    .send({
                      query: `
                      mutation { 
                        signup(first_name: "nick", last_name: "quail", password:"quail", email:"qqquail1@mail.com", city:"quail",state: "fl", industry:"ck2rzrd8m00270773ptf4j9oe"){
                            token
                        }
                      } 
                      `
                    });
                    console.log(response.body);
                })
        });


  describe('update', () => {
          it('should return an error if the user is not logged in', async () => {
            const server = app.createHttpServer({});
            const response = await request(server)
                    .post('/')
                    .set({Authorization:token})
                    .send({
                      query: `
                      mutation { 
                        update(first_name: "nicccck"){
                            id
                        }
                      } 
                      `
                    });
                    console.log(response.body);
                })
        });

  //  describe('delete', () => {
  //         it('should return a deleted user if succesful', async () => {
  //           const server = app.createHttpServer({});
  //           const response = await request(server)
  //           .post('/')
  //           .set({Authorization:token})
  //           .send({
  //             query: `
  //             mutation { 
  //               deleteUser {
  //                 first_name
  //                 last_name
  //                 id 
  //               }
  //             } 
  //             `
  //           });
  //           console.log(response.body);
  //           console.log(typeof response.body);

  //           expect(response.body.data).toBeTruthy()
  //         })
  //       });