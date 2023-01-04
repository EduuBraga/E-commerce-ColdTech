const mongoose = require('mongoose');
const process = require('process');

mongoose.set('strictQuery', true);

const startDB = async () => {
  const URL_DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apicoldtech.m1hz05w.mongodb.net/${process.env.DB_NAME}`;

  try {
    await mongoose.connect(URL_DB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = startDB;