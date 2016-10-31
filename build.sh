#!/bin/bash

npm install
cordova platform add ios
cordova platform add android
cordova platform add browser
cordova plugin add cordova-plugin-crosswalk-webview
cordova plugin add https://github.com/xseignard/cordovarduino.git
cordova prepare
