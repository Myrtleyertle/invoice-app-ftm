const request = require('supertest');
const app = require('../../src/app');
describe('test GET /invoices', () => {
    test('it should respond with 200', async () => {
        const response = await request(app).get('/invoices').expect(200);
        return response;
    })
})

describe('test POST/invoices', () => {
    test('it should respond with 201', async () => {
        const response = await request(app).post('/invoices').send({
            "id": "RT3080",
            "createdAt": "2021-08-18",
            "paymentDue": "2021-08-19",
            "description": "Re-branding",
            "paymentTerms": 1,
            "clientName": "Jensen Huang",
            "clientEmail": "jensenh@mail.com",
            "status": "paid",
            "senderAddress": {
              "street": "19 Union Terrace",
              "city": "London",
              "postCode": "E1 3EZ",
              "country": "United Kingdom"
            },
            "clientAddress": {
              "street": "106 Kendell Street",
              "city": "Sharrington",
              "postCode": "NR24 5WQ",
              "country": "United Kingdom"
            },
            "items": [
              {
                "name": "Brand Guidelines",
                "quantity": 1,
                "price": 1800.90,
                "total": 1800.90
              }
            ],
            "total": 1800.90
          }).expect(201);
          
        return response;
    })
    test('it should respond with 400', async() => {
        const response = await request(app).post('/invoices').send({}).expect(400);
        return response;
    })
    test('it should respond with incorret or missing values', async () => {
        const response = await request(app).post('/invoices').send({}).expect(400);
        return response;
    })
})