import request from "supertest"
import app from "../../server.js";

describe('users controller',() => {
    describe('GET /api/v1/users with valid params', () =>{
        it("Should all users - status 200", async () =>{
            const response = await request(app).get("/api/v1/users").send();
            expect(response.statusCode).toBe(200);
        });
    })
});