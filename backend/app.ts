import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import connect from "./src/Database/database";
import {userRoutes} from "./src/Routes/UsersRoute";
import {dashboardRoutes} from './src/Routes/dashboardRoutes';
import {categoryRoutes } from './src/Routes/CategoriesRoutes';
import {appointmentsRoutes} from './src/Routes/AppointmentsRoutes';
import cors from "cors";
import DB from "./src/Database/database";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./public/docs/swagger.json";
import { transactionsRoutes } from "./src/Routes/TransactionsRoutes";
import { feedbacksRoutes } from "./src/Routes/FeedbackRouter";
const app: Application = express();
const port: number = 5000 || process.env.PORT;
new DB("mongodb://localhost:27017/labayh");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/categories', categoryRoutes)
app.use('/appointments', appointmentsRoutes)
app.use('/transactions', transactionsRoutes)
app.use('/feedbacks', feedbacksRoutes)
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World.");
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});