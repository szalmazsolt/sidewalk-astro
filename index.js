const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
host = '127.0.0.1';

app.listen(port, host, console.log(`Server is listening on PORT ${port}...`))