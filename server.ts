import 'dotenv/config';
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import budgetRoutes from "./routes/budget";
import clientRoutes from "./routes/client";
import paymentRoutes from "./routes/payment";
import projectRoutes from "./routes/project";
import userRoutes from "./routes/user";

const app = express();

//middleware
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send('Welcome to my server!');
})

app.use('/api/budgets', cors(), budgetRoutes);
app.use('/api/clients', cors(), clientRoutes);
app.use('/api/payments', cors(), paymentRoutes);
app.use('/api/projects', cors(), projectRoutes);
app.use('/api/users', cors(), userRoutes);


//connect to DB
process.env.DBURL ? 
mongoose.connect(process.env.DBURL)
    .then((result) => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port', process.env.PORT)
        })
    })
    .catch((err) => console.log(err))
    :
    '';