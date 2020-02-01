'use strict' ;
const {server}=require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
describe('Food API' ,()=>{
    let testObj = { name : 'apple' , calories :25 , type:'FRUIT'};
    return mockRequest.post('/api/v1/food')
    .send(testObj)
    .then(data =>{
        console.log('******' , data.body);
        let record = data.body  ;
        Object.keys(testObj).forEach(key =>{
            expect(reccord[key]).toEquel(testObj[key]);
        });
    })
});