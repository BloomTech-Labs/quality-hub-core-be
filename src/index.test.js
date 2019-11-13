require('dotenv').config();
const request = require('supertest');
const app = require('./server');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrMnc3bTc2dTAwNncwNzYydGZvb3J2OHgiLCJlbWFpbCI6ImxhYnMxOC5xdWFsaXR5aHViQGdtYWlsLmNvbSIsImlhdCI6MTU3MzY3MjY0MSwiZXhwIjoxNTczNzE1ODQxfQ.CiFseiFqBajQR8g_Q7n2Q_BaJqKX5amUZLHKFpJ1W94';

// describe('me', () => {
//     it('returns the test string for quality hub core backend', async () => {
//       const server = app.createHttpServer({});
//       const response = await request(server)
//               .post('/')
//               .set({Authorization: token})
//               .send({
//                 query: 'query { me { first_name last_name } } '
//               });
//               console.log(response.body); 
//     //   expect(JSON.parse(response.text).data.me).toBe()
//     })
//   });
  
//   describe('login', () => {
//       it('should return an error if the user is not logged in', async () => {
//         const server = app.createHttpServer({});
//         const response = await request(server)
//                 .post('/')
//                 .send({
//                   query: `
//                   mutation { 
//                     login(email:"labs18.qualityhub@gmail.com", password: "welovequails18") 
//                     {
//                       token
//                     } 
//                   } 
//                   `
//                 });
//                 console.log(response.body.data.login);
//             })
//     });

// describe('user', () => {
//     it('returns the test string for quality hub core backend', async () => {
//       const server = app.createHttpServer({});
//       const response = await request(server)
//               .post('/')
//               .set({Authorization: token})
//               .send({
//                 query: 'query { users { first_name last_name } } '
//               });
//               console.log(response.body); 


//     //   expect(JSON.parse(response.text).data.me).toBe()
//     })
//   });


// describe('industries', () => {
//     it('returns the test string for quality hub core backend', async () => {
//       const server = app.createHttpServer({});
//       const response = await request(server)
//               .post('/')
//               .set({Authorization: token})
//               .send({
//                 query: 'query { industries{ name } } '
//               });
//               console.log(response.body); 

//     })
//   });


// describe('user', () => {
//     it('returns the test string for quality hub core backend', async () => {
//       const server = app.createHttpServer({});
//       const response = await request(server)
//               .post('/')
//               .set({Authorization: token})
//               .send({
//                 query: `query {
//                      user(id:"ck2pddqr100030766fg7560s8"){
//                          first_name 
//                      }
//                     } `
//               });
//               console.log(response.body); 

//     })
//   });

//   describe('signup', () => {
//           it('should return an error if the user is not logged in', async () => {
//             const server = app.createHttpServer({});
//             const response = await request(server)
//                     .post('/')
//                     // .set({Authorization:token})
//                     .send({
//                       query: `
//                       mutation { 
//                         signup(first_name: "nick", last_name: "quail", password:"quail", email:"qqquail@mail.com", city:"quail",state: "fl", industry:"ck2rzrd8m00270773ptf4j9oe"){
//                             token
//                         }
//                       } 
//                       `
//                     });
//                     console.log(response.body);
//                 })
//         });


  describe('update', () => {
          it('should return an error if the user is not logged in', async () => {
            const server = app.createHttpServer({});
            const response = await request(server)
                    .post('/')
                    .set({Authorization:token})
                    .send({
                      query: `
                      mutation { 
                        update(first_name: "nicccck", last_name: "quail", password:"quail", email:"qqquail@mail.com", city:"quail",state: "fl", industry:"ck2rzrd8m00270773ptf4j9oe"){
                            user
                        }
                      } 
                      `
                    });
                    console.log(response.body);
                })
        });