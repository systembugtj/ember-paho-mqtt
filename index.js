/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-paho-mqtt',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/paho-mqtt/src/mqttws31.js');
    app.import('vendor/paho-mqtt.js', {
      exports: {
        EXIF: ['default']
      }
    });
  }
};
