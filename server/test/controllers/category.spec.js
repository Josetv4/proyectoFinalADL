import request from "supertest";
import app from "../../server.js";

describe('Category Controller', () => {
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


    describe('GET /category with valid params', () => {
        it("Should all categories - status 200", async () => {
            const response = await request(app).get("/api/v1/category").send();
            expect(response.statusCode).toBe(200);
        });
    });

    describe('GET /category/id with valid params', () => {
        it("Should get a category - status 200", async () => {
            const id = 1;
            const response = await request(app).get(`/api/v1/category/${id}`).send();
            expect(response.statusCode).toBe(200);
        });
    });

    describe('PUT /category/:id with valid params', () => {
        it("Should update a category - status 200", async () => {
            const id = 1;
            const updatedData = {
                name: "Pediatricos",
            };
            const response = await request(app).put(`/api/v1/category/${id}`).send(updatedData);
            expect(response.statusCode).toBe(200);
        });
    });
});
