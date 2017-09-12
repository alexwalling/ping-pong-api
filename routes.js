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
    .get(controller.am)

  app.route('/')
    .get(controller.pong)
};