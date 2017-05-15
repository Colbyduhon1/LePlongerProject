const controller = require('./controllers');

const router = require('express').Router();

router.route('/dives')
  .get(controller.dives.get)
  .post(controller.dives.post)

router.route('/users')
  .get(controller.users.get)
  .post(controller.users.post)

router.route('/comments')
  .post(controller.comments.get)

router.route('/newcomment')
  .post(controller.comments.post)

router.route('/weather')
  .get(controller.weather.get)
  .post(controller.weather.get)

router.route('/weather/home')
  .get(controller.weather.home);

router.route('/ocean')
  .post(controller.ocean.get);

router.route('/new_sites')
  .get(controller.new_sites.get)
  .post(controller.new_sites.post)

router.route('/new_users')
  .post(controller.new_users.post)


module.exports = router;