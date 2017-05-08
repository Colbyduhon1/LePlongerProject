const controller = require('./controllers/controller.js');

const router = rqeuire('express').Router();

router.route('/dives')
  .get(controller.dives.get)
  .post(controller.dives.post)

router.route('/users')
  .get(controller.users.get)
  .post(controller.users.post)

router.route('/comments')
  .get(controller.comments.get)
  .post(controller.comments.post)

router.route('/new_sites')
  .get(controller.new_sites.get)
  .post(controller.new_sites.post)

router.route('/new_users')
  .get(controller.new_users.get)
  .post(controller.new_users.post)


module.exports = router;