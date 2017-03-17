#!/usr/bin/env node
var fs = require('fs-extra');

var rootdir = process.argv[2],
    webappSrc = rootdir + '/../kissfc-chrome-gui';

var filters = {
  debug: {
    hostname: 'debug-test'
  },
  release: {
    hostname: 'release-test'
  }
};
filters['default'] = filters.debug;


console.log("\nCOPYING ASSETS FROM CHROME APPLICATION...");
console.log('ENV CORDOVA_PROFILE:', process.env.CORDOVA_PROFILE);
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

try {
  fs.removeSync('www');
  fs.mkdirSync('www');
  fs.writeFile('www/.gitignore', '*\n!.gitignore');
  fs.copySync(webappSrc + '/main.css', 'www/main.css');
  fs.copySync(webappSrc + '/main.html', 'www/main.html');
  fs.copySync(webappSrc + '/main.js', 'www/main.js');
  fs.copySync(webappSrc + '/images', 'www/images');
  fs.copySync(webappSrc + '/content', 'www/content');
  fs.copySync(webappSrc + '/js', 'www/js');
  fs.copySync(webappSrc + '/i18n', 'www/i18n');
//  fs.copySync('res', 'www/res');

  //fs.copySync('merges/device.js', 'www/device.js');

  console.log('done.\n');
} catch (e) {
  console.error('Failed to copy web assets from the webapp: ', e.message);
  process.exit(1);
}
