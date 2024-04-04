import request from "supertest";
import app from "../../server.js";

describe('Login Controller', () => {
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


    describe('POST /login with valid params', () => {
        it("Should log in user - status 400", async () => {
            const userData = {
                email: "test@example.com",
                password: "password123"
            };
            const response = await request(app).post("/api/v1/login").send(userData);
            expect(response.statusCode).toBe(400);
        });
    });

    describe('POST /login with missing email', () => {
        it("Should return 400 if email is missing", async () => {
            const userData = {
                password: "password123"
            };
            const response = await request(app).post("/api/v1/login").send(userData);
            expect(response.statusCode).toBe(400);
        });
    });

    describe('POST /login with missing password', () => {
        it("Should return 400 if password is missing", async () => {
            const userData = {
                email: "test@example.com"
            };
            const response = await request(app).post("/api/v1/login").send(userData);
            expect(response.statusCode).toBe(400);
        });
    });

    describe('POST /login with invalid credentials', () => {
        it("Should return 400 if user does not exist", async () => {
            const userData = {
                email: "nonexistent@example.com",
                password: "invalidpassword"
            };
            const response = await request(app).post("/api/v1/login").send(userData);
            expect(response.statusCode).toBe(400);
        });
    });
});
