import express, { Application, Express, Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const createError = require('http-errors');

// Import Routers
import indexRouter from './routes/index';
import apiRouter from "./routes/api";

app.use(express.json());
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/api', apiRouter);

  app.use(function(_req: Request, _res: Response, next: NextFunction) {
    next(createError(404));
  });
  

  app.use((err: { message: any; status: any; }, req: Request, res: Response, next: NextFunction) => {
   
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render(`error`);
  });

export default app;