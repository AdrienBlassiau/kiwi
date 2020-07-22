const path = require('path');
const os = require('os');

var userdata = '';
var homedata = os.homedir();

if (process.env.APPDATA) {
  // console.log("ICI 1")
  userdata = process.env.APPDATA + path.sep + 'kiwi' + path.sep;
} else if (process.platform == 'darwin') {
  // console.log("ICI 2")
  userdata = homedata + '/Library/Application Support/kiwi/';
} else if (process.platform == 'android') {
  // console.log("ICI 3")
  homedata = '/sdcard';
  userdata = homedata + '/kiwi/';
} else if (process.env.XDG_CONFIG_HOME) {
  // console.log("ICI 4")
  userdata = process.env.XDG_CONFIG_HOME + '/kiwi/';
} else {
  // console.log("ICI 5")
  userdata = homedata + '/.config/kiwi/';
}

module.exports.home = homedata;
module.exports.user = userdata;
