import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import registerRoute from "./routes/api/v1.0.0/register";
import loginRoute from './routes/api/v1.0.0/login';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
// Routes

app.get("/", (req, res) => {
    res.send("I'm still listening...");
});

app.use("/api/v1.0.0/register", registerRoute);
app.use("/api/v1.0.0/login", loginRoute);

// Connect to DB
// process.env.DB_CONNECT

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useCreateIndex", true);

mongoose
    .connect("mongodb://0.0.0.0:27017/lets-event"
    // , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }
    )
    .then(() => {
        return console.log("Connected to DB!");
    })
    .catch((err) => console.log(err));

app.listen(port, () => {
    return console.log(`Let's event endpoint is listening at http://localhost:${port}`);
});