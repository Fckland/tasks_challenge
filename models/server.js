const express = require("express");
const cors = require("cors");
const connectDB = require("../database/config");

require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.path = {
      tasks: "/",
    };
    this.conectarDB();
    this.middleware();
    this.routes();
  }
  async conectarDB() {
    await connectDB();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.path.tasks, require("../routes/tasks"));
  }
  listen() {
    this.app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  }
}

module.exports = Server;
