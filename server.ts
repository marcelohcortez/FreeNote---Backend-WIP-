import 'dotenv/config';
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import projectRoutes from "./routes/project";

const app = express();

//middleware
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send('Welcome to my server!');
})

app.use('/api/projects', cors(), projectRoutes);


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