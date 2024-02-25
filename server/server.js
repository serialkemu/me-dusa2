const express = require('express');
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
const cors = require('cors');
const CustomError = require('./Utils/customError');
const globalErrorHandler = require('./Controllers/errorController');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const path = require('path');

//handling uncaught exceptions
process.on('uncaughtException', (err)=>{
  console.log(err.name, err.message);
  console.log('Uncaught exception occured. Shutting Down..!');

  process.exit(1);
});

const app = express();
const PORT = process.env.PORT;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());

// app.use('/users',authRouter, userRouter);
// app.use('/requests', requestRouter)
// app.use('/images', express.static(path.join(__dirname, 'images')));
//last route for all other url routes 
app.all('*', (req, res, next)=>{  
  const err= new CustomError(`Cant find ${req.originalUrl} on the server!!`, 404);

  next(err); 
});

app.use(globalErrorHandler)

// Connect to MongoDB
mongoose.connect(process.env.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


//handling unhandled rejection error
process.on('unhandledRejection', (err)=>{
  console.log(err.name, err.message);
  console.log('Unhandled rejection occured. Shutting Down..!');

  server.close(() =>{
    process.exit(1);
  })
})
