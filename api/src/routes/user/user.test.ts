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

  it("should return content type of json", async () => {
    return await request(app).get("/api/user").expect("Content-Type", /json/);
  });

  it("should return all users", async () => {
    const res = await request(app).get("/api/user");
    const body: User[] = await res.body;
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty("name");
    expect(body[0]).toHaveProperty("email");
    expect(body[0]).toHaveProperty("location");
  });
});
