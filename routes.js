'use strict';
module.exports = function(app) {
  var controller = require('./controller');

  app.route('/ping')
    .get(controller.pong)

  app.route('/pong')
    .get(controller.ping)

  app.route('/professional-ping-pongs')
    .get(controller.pro)

  app.route('/amateur-ping-pong')
    .get(controller.ametuer)

  app.route('/chance-ping-pong')
    .get(controller.chance)

  app.route('/')
    .get(controller.pong)
};