// importing the 
const app = require('./src/app');
const db = require('./src/databaseConnection');

require('./src/APIs/typeGetApis');
require('./src/APIs/GetAPIs');
require('./src/APIs/DataUpdationAPIs');

// Global Vars Declaration.
const hostname = '127.0.0.1';
const port = 8081;


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`App is running on http://${hostname}:${port}`);
});


