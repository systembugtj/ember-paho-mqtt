/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var addon = this;
    var bowerPackages = [
      { name: 'paho-mqtt', target: '*' }
    ];

    return addon.addBowerPackagesToProject(bowerPackages);
  }
};
