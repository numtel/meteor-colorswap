Package.describe({
  summary: "Wrapper for colorswap.js library",
  version: "1.0.2",
  git: "https://github.com/numtel/meteor-colorswap.git"
});

var packageContents = function(api){
  api.addFiles('colorswap/tinycolor.js', 'client');
  api.addFiles('colorswap/colorswap.js', 'client');
};

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  packageContents(api);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('test-helpers');
  packageContents(api);
  api.addFiles('colorswap-tests.js', 'client');
});
