const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Big-Macros', {
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
