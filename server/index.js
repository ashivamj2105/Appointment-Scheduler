// Importing Node Modules
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');

const dbConnManager = require('$/utils/db-conn-manger');

// App setup
const app = express();
const port = parseInt(process.env.APP_PORT, 10);

app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({
  extended: true,
}));

/**
 * App Routes
 */
app.get('/', (req, res) => {
  res.send('Welcome to Appointment Scheduler');
});


/**
 * To make sure, app start only if database is found
 */
dbConnManager.safeConnect().then(
  () => app.listen(port, () => console.log(`Webservice listening on port: ${port}`)),
);
