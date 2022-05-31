import express from 'express'
import {loginRouter} from "../routes/login.js"

const app = express()

app.use(express.json())
app.use("/auth", loginRouter);

app.listen(3000, () => console.log("http://localhost:3000"))