'use strict';
module.exports = function(app) {
  var controller = require('./controller');

  app.route('/ping')
    .get(controller.pong)

  app.route('/')
    .get(controller.pong)
};