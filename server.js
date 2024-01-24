import 'dotenv/config'
import express from "express"

const app = express()

//routes
app.get("/", (req, res) => {
    res.send('Welcome to my server!');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})