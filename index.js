import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Routes from './src/pages/login/login';

AppRegistry.registerComponent(appName, () => Routes);
