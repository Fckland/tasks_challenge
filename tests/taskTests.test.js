// const request = require("supertest");
// const app = require("../app"); // assuming the Express app is exported from a file named app.js
// const Task = require("../models/task"); // assuming the Task model is imported from a separate file

// describe("Task API Tests", () => {
//   beforeEach(async () => {
//     // You may need to setup a test database and seed it with some initial data
//     // before running the tests
//     // Example: await seedTestData();
//   });

//   afterEach(async () => {
//     // You may need to clean up the test database after running the tests
//     // Example: await cleanupTestData();
//   });

//   // Test for GET /tasks
//   describe("GET /tasks", () => {
//     it("should return an array of tasks with default limit and from values", async () => {
//       const response = await request(app).get("/tasks");
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("total");
//       expect(response.body).toHaveProperty("task");
//     });

//     it("should return an array of tasks with custom limit and from values", async () => {
//       const response = await request(app).get("/tasks").query({ limit: 10, from: 5 });
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("total");
//       expect(response.body).toHaveProperty("task");
//     });

//     it("should return an array of tasks filtered by query parameters", async () => {
//       const response = await request(app).get("/tasks").query({ name: "test" });
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("generalFilter");
//     });
//   });

//   // Test for GET /tasks/:id
//   describe("GET /tasks/:id", () => {
//     it("should return a single task by ID", async () => {
//       const task = new Task({ name: "test", description: "Test task", completed: false });
//       await task.save();

//       const response = await request(app).get(`/tasks/${task._id}`);
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("_id", task._id.toString());
//     });

//     it("should return an error for invalid task ID", async () => {
//       const response = await request(app).get("/tasks/invalid-id");
//       expect(response.status).toBe(404);
//       expect(response.body).toHaveProperty("error", "Task not found");
//     });

//     it("should return an error for non-existing task ID", async () => {
//       const nonExistingTaskId = "60b241e95f9e2a2d8830e76"; // assuming this ID does not exist in the test database
//       const response = await request(app).get(`/tasks/${nonExistingTaskId}`);
//       expect(response.status).toBe(404);
//       expect(response.body).toHaveProperty("error", "Task not found");
//     });
//   });

//   // Test for POST /tasks
//   describe("POST /tasks", () => {
//     beforeEach(async () => {
//       // You may need to setup a test database and seed it with some initial data
//       // before running the tests
//       // Example: await seedTestData();
//     });
  
//     afterEach(async () => {
//       // You may need to clean up the test database after running the tests
//       // Example: await cleanupTestData();
//     });
  
//     it("should create a new task with valid task details", async () => {
//       const taskDetails = { name: "test", description: "Test task", completed: false };
//       const response = await request(app).post("/tasks").send(taskDetails);
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("newTask");
//       expect(response.body.newTask).toMatchObject(taskDetails);
//     });
  
//     it("should create a new task with default values for optional fields", async () => {
//       const taskDetails = { name: "test" };
//       const response = await request(app).post("/tasks").send(taskDetails);
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("newTask");
//       expect(response.body.newTask).toMatchObject({ ...taskDetails, description: "", completed: false });
//     });
  
//     it("should return an error for missing required field 'name'", async () => {
//       const taskDetails = { description: "Test task", completed: false };
//       const response = await request(app).post("/tasks").send(taskDetails);
//       expect(response.status).toBe(400);
//       expect(response.body).toHaveProperty("error", "Missing required field 'name'");
//     });
//   })
// })


