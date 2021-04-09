import request from "supertest";
import app from "../../app";

interface User {
  name: string;
  email: string;
  location: string;
}

describe("user router", () => {
  it("should respond to a get request with 200 status", async () => {
    return await request(app).get("/api/user/").expect(200);
  });
});
