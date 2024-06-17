require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const port = process.env.PORT;

//multiple start different domain
app.use(cors());

// Connect to DB
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Initialize routes
route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
