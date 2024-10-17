const express = require('express');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');
const error404 = require('./middleware/err-404');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(logger);
app.use('/', booksRouter);
app.use('/user', userRouter);
app.use(error404);

const PORT = process.env.PORT || 3000;
app.listen(PORT);