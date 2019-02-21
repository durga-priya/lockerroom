/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignUp from './android/app/src/signup/signup';
import LoginView from './android/app/src/login/login';
//import { createStackNavigator } from "react-navigation";
import {name as appName} from './app.json';
//const SimpleApp = createStackNavigator({
//  Home: { screen: SignUp },
//  SecondScreen: { screen: LoginView, title: "Second Screen" }
//});

AppRegistry.registerComponent('Locker_Room', () => SignUp);
