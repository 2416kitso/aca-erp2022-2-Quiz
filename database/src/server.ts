import express from 'express';
import bodyParser from "body-parser";
import cors from "cors"; 
import tasksRouter from './routes/tasks';

export default function createServer(){
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get("/",(req,res) => { res.send("QUIZ SERVER");
app.use("/api/v1/questions",tasksRouter);
});

return app;
}


