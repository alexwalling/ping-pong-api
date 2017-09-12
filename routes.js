'use strict';
module.exports = function(app) {
  var controller = require('./controller');

  app.route('/ping')
    .get(controller.pong)

  app.route('/pong')
    .get(controller.ping)

  app.route('/')
    .get(controller.pong)
};