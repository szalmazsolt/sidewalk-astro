const express = require('express');

const eventsRouter = require('./routes/events');

const app = express();

// Setup json body parser middleware
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Sidewalk Astronomy');
});

// Mounting the events router to the api route
app.use('/api/v1/events', eventsRouter);

const port = process.env.PORT || 5000;
host = '127.0.0.1';

app.listen(port, host, console.log(`Server is listening on PORT ${port}...`));