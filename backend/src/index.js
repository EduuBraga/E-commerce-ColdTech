require('dotenv').config();
const app = require('./app');
const startDB = require('./configs/mongodb.js');
const PORT = process.env.PORT || 3000;

startDB();

app.listen(PORT, () => console.log('Server is running...'));