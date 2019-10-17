const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  htmlGenerator: process.env.HTML_GENERATOR,
  port: process.env.PORT,
};
