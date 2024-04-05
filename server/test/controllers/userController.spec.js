import request from "supertest";
import app from "../../server.js";

describe('Users Controller', () => {
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


    describe('GET /api/v1/users with valid params', () => {
        it("Should all users - status 200", async () => {
            const response = await request(app).get("/api/v1/users").send();
            expect(response.statusCode).toBe(200);
        });
    });
});
