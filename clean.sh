#!/bin/bash

if [ -d ./node_modules ] ; then
    rm -rf ./node_modules
fi
if [ -d ./platforms ] ; then
    rm -rf ./platforms
fi
if [ -d ./plugins ] ; then
    rm -rf ./plugins
fi
