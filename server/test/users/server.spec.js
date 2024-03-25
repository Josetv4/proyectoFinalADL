import request from "supertest";
import server  from "../../config/routes/userRoutes";

describe("Operaciones CRUD de usuarios", () => {

    it("Devuelve status code 200", async () => {
        const {body, status } = await request(server)
                                      .get("/users")
                                      .send();
        expect(status).toBe(200);
   
    });

    /* it("404 al intentar eliminar un café con un id que no existe", async () => {
        const jwt = "token";
        const idToDelete = 10;
        const { statusCode } = await request(server)
                                    .delete(`/cafes/${idToDelete}`)
                                    .set("Authorization", jwt)
                                    .send();
        expect(statusCode).toBe(404);
    });

    it("Agregar nuevo cafe y devolver codigo 201", async () => {
        const id = Math.floor(Math.random() * 999);
        const cafe = { id, nombre: "Nuevo Café" };
        const { body: cafes, statusCode } = await request(server)
                                                    .post("/cafes")
                                                    .send(cafe);
        expect(cafes).toContainEqual(cafe);
        expect(statusCode).toBe(201);
    });

    it("Obtener codigo 400 al intentar actualizar un café enviando id diferente al id del payload", async () => {
        const actualizarCafe = { id: 1, nombre: "Cortado" };
        const response = await request(server)
                                    .put("/cafes/2")
                                    .send(actualizarCafe);
        const statusCode = response.statusCode;
        expect(statusCode).toBe(400);
    }); */
});