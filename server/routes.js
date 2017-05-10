const controller = require('./controllers');

const router = require('express').Router();

router.route('/dives')
  .get(controller.dives.get)
  .post(controller.dives.post)

router.route('/users')
  .get(controller.users.get)
  .post(controller.users.post)

router.route('/comments')
  .get(controller.comments.get)
  .post(controller.comments.post)

router.route('/weather')
  .get(controller.weather.get)
  .post(controller.weather.get)

router.route('/weather/home')
  .get(controller.weather.get);


//JI: we only have user,dive,commment tables
//these routes would probably be part of one of the above endpoints
router.route('/new_sites')
  .get(controller.new_sites.get)
  .post(controller.new_sites.post)

router.route('/new_users')
  .get(controller.new_users.get)
  .post(controller.new_users.post)


module.exports = router;