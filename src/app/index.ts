import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './index.config';

/*import home from '../features/home/index';*/
/*import login from '../features/login/index';*/
import UserHome from '../features/userhome/index';
import {HistoryHandler} from './history/history.component';

let moduleName = 'app'
angular.module(moduleName,[uiRouter,UserHome]).config(routing);
angular.element(document).ready(function() {
	angular.bootstrap(document, [moduleName]);
});