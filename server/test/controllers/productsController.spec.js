import request from "supertest";
import app from "../../server.js";

describe('Products Controller', () => {
    let server;

    beforeAll(done => {
        server = app.listen(() => {
            console.log('Servidor encendido en el puerto', server.address().port);
            done();
        });
    });

    afterAll(done => {
        server.close(() => {
            console.log('Servidor cerrado');
            done();
        });
    });


    describe('GET /products', () => {
        it('should get all products - status 200', async () => {
            const response = await request(app).get('/api/v1/products');
            expect(response.statusCode).toBe(200);
        });
    });

    describe('GET /products/:id', () => {
        it('should get a product by ID - status 200', async () => {
            const id = 1;
            const response = await request(app).get(`/api/v1/products/${id}`);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('GET /products/category/:id', () => {
        it('should get products by category ID - status 200', async () => {
            const id = 1;
            const response = await request(app).get(`/api/v1/products/category/${id}`);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('GET /products/user/:id', () => {
        it('should get products by user ID - status 200', async () => {
            const id = 1;
            const response = await request(app).get(`/api/v1/products/user/${id}`);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('DELETE /products/:id', () => {
        it('should delete a product - status 200', async () => {
            const id = 1;
            const response = await request(app).delete(`/api/v1/products/${id}`);
            expect(response.statusCode).toBe(200);
        });
    });
});
