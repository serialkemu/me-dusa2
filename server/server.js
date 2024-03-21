const express = require('express');
const mongoose = require('mongoose');
const casesRouter = require('./Routes/casesRouter');
const adminRouter = require('./Routes/adminRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
const CustomError = require('./Utils/customError');
const globalErrorHandler = require('./Controllers/errorController');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/cases', casesRouter);
app.use('/admin', adminRouter)

app.all('*', (req, res, next) => {
  const err = new CustomError(`Can't find ${req.originalUrl} on the server!!`, 404);
  next(err);
});

app.use(globalErrorHandler);

mongoose.connect(process.env.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

process.on('uncaughtException', err => {
  console.error('Uncaught exception occurred:', err);
  console.log('Shutting down server...');
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.error('Unhandled rejection occurred:', err);
  console.log('Shutting down server...');
  process.exit(1);
});
