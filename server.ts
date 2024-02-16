require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const budgetRoutes = require("./routes/budget");
const budgetStatusRoutes = require("./routes/budgetStatus");
const clientRoutes = require("./routes/client");
const noteRoutes = require("./routes/note");
const paymentRoutes = require("./routes/payment");
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());

app.use("/api/budgets", cors(), budgetRoutes);
app.use("/api/clients", cors(), clientRoutes);
app.use("/api/notes", cors(), noteRoutes);
app.use("/api/payments", cors(), paymentRoutes);
app.use("/api/projects", cors(), projectRoutes);
app.use("/api/users", cors(), userRoutes);
app.use("/api/status/budgets", cors(), budgetStatusRoutes);
app.use("/api/auth", cors(), authRoutes);

//connect to DB
mongoose
  .connect(process.env.DBURL!)
  .then((result: any) => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((err: any) => console.log(err));
