// tests/unit/chartist-module-test.js
import { module, test } from 'qunit';
import MQTT from 'MQTT';

module('paho-mqtt as an ES6 module');

test('it works', function(assert) {
  assert.ok(MQTT !== null);
});
