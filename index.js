const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

app.use(express.json())

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => res.json('Hello World!'));

app.listen(port, () => console.log(`Listening on port ${port}`));
