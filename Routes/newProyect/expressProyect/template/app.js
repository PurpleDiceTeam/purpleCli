import express from "express";
import http from "http"
import morgan from "morgan";
import config from "./config.js"
import routesApi from "./src/routes/routes.js";

const { CORSEURL } = config

const app = express();
const server = http.createServer(app)

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CORSEURL);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

routesApi(app);

export default server;
