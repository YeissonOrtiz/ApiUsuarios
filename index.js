const express = require('express');
const app = express();

const cors = require('cors');

const port = process.env.PORT || 3000;
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const queryErrorHandler = require('./middlewares/queryErrorHandler');

app.use(express.json())


const whitelist = ['http://localhost:8080', 'http://127.0.0.1:5500'];
const option = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(option));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(queryErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => res.json('ve a /api/users'));

app.listen(port, () => console.log(`Listening on port ${port}`));
