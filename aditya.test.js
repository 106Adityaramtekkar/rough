const sup = require("supertest");
const url = "http://109.106.255.69:2208/student/";
const url_1 = "http://109.106.255.69:2208/contact";
const url1 = "http://109.106.255.69:2208/contact/updateContactById/478";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIxNywiaWF0IjoxNjYxOTY2MzU5LCJleHAiOjE2NjE5Njk5NTl9.2-khFCwvgcpJJPIFl7HdhIIBa2TmYV9epD6-RYVAh9Q";
let token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIxNywiaWF0IjoxNjYyMDAzMzgwLCJleHAiOjE2NjIwMDY5ODB9.vO0FPRnYtg8-86TUPjou_3VEkwiBaRUXNY27GwFUs2w";
let token3 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIxNywiaWF0IjoxNjYyMDQwOTEzLCJleHAiOjE2NjIwNDQ1MTN9.73pPr6AyGBm4UbPKeoE6zSROfF28v-9yEf0olaCqoK0";
// beforeAll(() => {
//   console.log("before test cases");
// });

// beforeEach(() => {
//   console.log("start");
// });

// afterEach(() => {
//   console.log("end");
// });

// afterAll(() => {
//   console.log("after test cases");
// });

describe("User creation", () => {
  test.skip("POST user/signup -pass- user signup", async () => {
    const body = await sup(url).post("register").send({
      studentName: "Pifffkcxzramm",
      phone: "8756202490",
      email: "ppaapp4554@gmail.com",
      rollNo: "me4123",
      password: "1289456",
    });
    console.log("account creation", body);
    expect(body.statusCode).toBe(200);
  });
});

describe("User login", () => {
  test.skip("POST user/Login -pass- user signup", async () => {
    const body = await sup(url).post("login").send({
      email: "ppaa54@gmail.com",
      password: "1289456",
    });
    console.log("login ", body);
    expect(body.statusCode).toBe(200);
  });
});

describe("add contact", () => {
  test("POST user/contact added -pass- user signup", async () => {
    const body = await sup("http://109.106.255.69:2208/contact/addContact")
      .post("")
      .set("Authorization", "bearer " + token3)
      .send({
        name: "Aditya4512",
        phone: 8669845771,
        email: "adi4455@gmail.com",
        description: "aditya is good boy ",
      });
    console.log("contact creation", body);
    // expect(body.statusCode).toBe(200);
  });
});

describe.skip("Edit contact", () => {
  test.skip("PUT user/Edit -pass- user signup", async () => {
    const body = await sup(url1)
      .put("")
      .set("Authorization", "bearer " + token)
      .send({
        name: "Aditya12",
        phone: 8669847771,
        email: "adi45@gmail.com",
        description: "Aditya is a talented guy .",
      });
  });
});
describe("Delete contact", () => {
  test.skip("DELETE user/Delete -pass- user signup", async () => {
    const body = await sup(url_1)
      .delete("deleteContactById/478")
      .set("Authorization", "bearer " + token);
  });
});
