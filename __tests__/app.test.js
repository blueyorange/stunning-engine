const request = require("supertest");
const app = require("../app");
//const db = require("../db/index");

describe("GET /", () => {
  it("responds with status 200 and message ok", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then((res) => {
        expect(res.body.msg === "ok");
      });
  });
});
describe("GET /login", () => {
  it("responds with status 302 and redirect with correct credentials", () => {
    return request(app)
      .post("/login")
      .send({ username: "bob", password: "password" })
      .expect(200)
      .then((res) => {
        expect(res.body.msg === "logged in!");
      });
  });
  it("responds with status 404 if username incorrect", () => {
    return request(app)
      .post("/login")
      .send({ username: "invalid_username", password: "password" })
      .expect(404)
      .then((res) => {
        expect(res.body.msg === "incorrect password");
      });
  });
});
