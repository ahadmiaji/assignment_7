const express = require('express');
const app = express();
const router = require("./src/Routes/api");

//base url
//app.use('/api/v1',router);
app.use(express.json());
app.use(router);

//Handle undefined routes(404)
app.use((req, res, next) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
});
module.exports = app;