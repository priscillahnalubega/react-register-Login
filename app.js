const express = require ('express');
const  app  = express();
const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('[mongodb://localhost:27017/platform',{useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('sucessfully connected to Database')
});

const userRouter = require('./routes/User');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(app.userRouter);
app.use(routes);
app.use('./user', userRouter);



app.listen(5000,()=>{
    console.log('express server started');
});