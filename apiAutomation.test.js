var supertest = require('supertest');
const request=supertest('https://reqres.in/')

const SECONDS = 1000;
jest.setTimeout(7 * SECONDS)
it('Get all users' , async() => {

   
    const response = await request.get('api/users?page=2');
    console.log(response.body);
    expect(response.status).toBe(200);

});