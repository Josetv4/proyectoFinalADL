import request from "supertest"
import app from "../../server.js";

describe('category controller',() => {
    describe('GET /category with valid params', () =>{
        it("Should all categories - status 200", async () =>{
            const response = await request(app).get("/api/v1/category").send();
            expect(response.statusCode).toBe(200);
        });
    });
    describe('GET /category/id with valid params', () =>{
        it("Should get a category - status 200", async () =>{
            const id = 1;
            const response = await request(app).get(`/api/v1/category/${id}`).send();
            expect(response.statusCode).toBe(200);
        });
    })
})
