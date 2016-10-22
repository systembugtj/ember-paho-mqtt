/*jshint node:true*/
module.exports = {
  description: ''
  normalizeEntityName: function() {},

  afterInstall: function() {
    var addon = this;
    var bowerPackages = [
      { name: 'paho-mqtt', target: '1.0.1' }
    ];
    
    return addon.addBowerPackagesToProject(bowerPackages);
  }
};
