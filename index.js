import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/users.js";
const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const response = "hi";
    res.send(response);
});

app.use("/users", userRouter);

app.listen(PORT, () =>
    console.log(`Server running on port:http://localhost:${PORT}`)
);
