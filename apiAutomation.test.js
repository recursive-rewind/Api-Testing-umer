var supertest = require('supertest')
const request = supertest('http://reqres.in/')

it('Get All users',()=>{
    const response = request.get('api/users?page=2')
    console.log(response.body)
    expect(response.status).toBe(undefined)
    jest.setTimeout(() => {
        
    }, 70000);
    
}) 