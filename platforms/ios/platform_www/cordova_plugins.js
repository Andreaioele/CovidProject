cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-background-geolocation.BackgroundGeolocation",
      "file": "plugins/cordova-plugin-background-geolocation/www/BackgroundGeolocation.js",
      "pluginId": "cordova-plugin-background-geolocation",
      "clobbers": [
        "BackgroundGeolocation"
      ]
    },
    {
      "id": "cordova-plugin-background-geolocation.radio",
      "file": "plugins/cordova-plugin-background-geolocation/www/radio.js",
      "pluginId": "cordova-plugin-background-geolocation"
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-background-geolocation": "3.1.0",
    "cordova-plugin-device": "1.1.7",
    "cordova-plugin-whitelist": "1.3.4"
  };
});