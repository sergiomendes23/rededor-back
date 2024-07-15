import app from "../src/app.js";
import supertest from "supertest";
import { closeCache, deleteCache } from "./factory/deleteCache.js";

const agent = supertest(app);

 beforeEach(async () => {
     await deleteCache(); 
 });

describe("GET /:CEP", () => {

    it('Should return status 200 when the zip code is valid', async () => {
        const cep = '25070-100'
        const {body} = await agent.get(`/${cep}`)
        console.log("body 1", body)
        expect(body.status).toBe(200)
    });

    // it.only('Should return status 404 when the zip code is not found', async () => {
    //     const cep = '25015-101'
    //     const {status} = await agent.get(`/${cep}`)
    //     console.log("body 2", status.data)
    //     expect(status).toBe(404)
    // });

    it('Should return status 422 when the zip code is written incorrectly', async () => {
        const cep = '2.50100'
        const {status} = await agent.get(`/${cep}`)
        console.log("body 3", status)
        expect(status).toBe(422)
    });

})

afterAll(async () => {
    await closeCache();
});