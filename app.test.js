// app.test.js
// import supertest and the express app
const request = require('supertest');
const app = require('./app');
describe.skip('Calculator Routes', () => {
// generate some random numbers to test the calculator
let number1 = Math.floor(Math.random() * 1_000_000);
let number2 = Math.floor(Math.random() * 1_000_000);
    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                result: (number1 + number2)
                });
            });
    });

    test('GET /calculator/add => failed because of no expected params', () => {
        return request(app)
            .get(`/calculator/add?num=${number1}&number=${number2}`)
            .expect('Content-Type', /json/)
            .expect(422)
            .then((response) => {
                console.log("response",response.body)
                expect(response.body).toEqual({
                result:"Not valid values"
                });
            });
        });
});

describe('User Routes', () => { 

    // Pass test Chris Happy Path
    test("GET /user/:id => get specific user from list", () => {
        return request(app)
        .get(`/user/1`)
        .expect(200)
        .then((response) => {
            console.log("response", response.body);
            expect(response.body).toEqual({
            result: { id: 1, name: "Anthony Albanese", country: "AU" },
            });
        });
    });

    // Get a not valid ID
    test("GET /user/:id => Not a valid number Id on the list ", () => {
        return request(app)
        .get(`/user/8`)
        .expect(404)
        .then((response) => {
            console.log("response", response.body);
            expect(response.body).toEqual({
            result: `User 8 not found`
            });
        });
    });

    








});

