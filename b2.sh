#!/bin/bash

VERSION="2.0.1"
cordova prepare
cordova build android --release
cp ./platforms/android/build/outputs/apk/android-armv7-release.apk bin/Kiss-GUI-${VERSION}-android.apk
