import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user.router';
import companyRouter from './routers/company.route';

const app = express()
app.use(express.json())
const port = 8080;



app.get("/", (req, res) => {
    return res.send("hello world")
})

mongoose.connect("mongodb://127.0.0.1:27017/my-project")
    .then(() => console.log("DB Connected !"))

app.listen(port, () => {
    console.log("server is running on port:" + port)

})



app.use(userRouter)
app.use(companyRouter)

