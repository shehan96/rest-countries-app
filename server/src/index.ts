import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/routes';

const app = express();

/**
 * Add bodyParser
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property
 * * parse application/x-www-form-urlencoded
 * * parse application/json
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Hadnle cors
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

/**
 * Add routes
 */
app.use('/', routes);

/**
 * Error Handling
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('requested route is not found');
  return res.status(404).json({
    code: 404,
    status: 'error',
    error: {
      code: error.name,
      message: error.message,
    },
  });
});

/**
 * Define port number
 */
const port: number = Number(process.env.PORT) || 5000;

/**
 * App start listen
 */
app.listen(port, () => {
  console.log('🚀 Server is running under port number 5000 🚀');
});
