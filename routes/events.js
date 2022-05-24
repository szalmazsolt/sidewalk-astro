const router = require('express').Router();

const getEvents = require('../middleware/events/getEvents');
const getEvent = require('../middleware/events/getEvent');
const createEvent = require('../middleware/events/createEvent');
const updateEvent = require('../middleware/events/updateEvent');
const deleteEvent = require('../middleware/events/deleteEvent');

router.route('/')
  .get(getEvents)
  .post(createEvent)

router.route('/:id')
  .get(getEvent)
  .patch(updateEvent)
  .delete(deleteEvent)


module.exports = router;