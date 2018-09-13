/*
 * @file: index.js
 * @description: Initilize Application
 * @date: 13.September.2018
 * @author: Nishant Singh
 * */

import {AppRegistry} from 'react-native';

import {name as appName} from './package.json';

import RNKIT from './Main';

AppRegistry.registerComponent(appName, () => RNKIT);
