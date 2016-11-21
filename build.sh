#!/bin/bash

VERSION="1.14"
if [ -d ./node_modules ] ; then
    rm -rf ./node_modules
fi
if [ -d ./platforms ] ; then
    rm -rf ./platforms
fi
if [ -d ./plugins ] ; then
    rm -rf ./plugins
fi
if [ ! -d ./bin ] ; then
    mkdir bin
fi
npm install
cordova platform add ios
cordova platform add android
cordova platform add browser
cordova plugin add cordova-plugin-crosswalk-webview
cordova plugin add https://github.com/xseignard/cordovarduino.git
cordova prepare
cordova build android --release
cordova build ios --device
cp ./platforms/android/build/outputs/apk/android-armv7-release.apk bin/Kiss-GUI-${VERSION}-android.apk
cp ./platforms/ios/build/device/KISS\ GUI.ipa bin/Kiss-GUI-${VERSION}-ios.ipa