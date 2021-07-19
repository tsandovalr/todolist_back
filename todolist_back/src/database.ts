import mongoose from 'mongoose';
import config from './config';
require('dotenv').config();

const MONGODB_URI:string = process.env.MONGODB_URI!;

mongoose.connect(MONGODB_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex : true
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection succesfull');
});

connection.on('error', err => {
    console.log(err);
    process.exit(0);
});