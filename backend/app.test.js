import request from "supertest"
import app from "./app.js"

describe("POST /users", () => {

  describe("when signing in as gwen ba a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user/signIn").send({ 
        username: "gwenbaker", 
        password: "turtle" 
      })
      expect(response.statusCode).toBe(200)
      expect(response.body.user_id).toBe(1)
    })
  })

})

describe("get /stocks", () => {
  describe("when requesting the stocks", () => {
    test("should respond with a 200 status code and return a list of stocks where the first one is 360", async () => {
      const response = await request(app).get("/stock")
      expect(response.statusCode).toBe(200)
      expect(response.body[0].symbol).toBe('360')
    })
  })
})