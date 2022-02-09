import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Routes from './src/pages/Index';

AppRegistry.registerComponent(appName, () => Routes);
