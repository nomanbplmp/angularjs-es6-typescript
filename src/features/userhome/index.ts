import * as angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './user.home.config';
import UserHomeController from './user.home.controller';

export default angular.module("UserHome",[uirouter])
.controller('userHome',UserHomeController)
.config(routes)
.name