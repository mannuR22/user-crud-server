
const mongoose = require('mongoose');
const  MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/questionthree'; 

const connectDB = async () => {
  
  try {
    db = await mongoose.connect(MONGO_URI);
    console.log('connected to mongo');
    return db;
  } catch (error) {
    console.log('Error connecting to MongoDB:' + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;