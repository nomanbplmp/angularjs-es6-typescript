import * as angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.config';
import LoginController from './login.controller';
import LoginService from './login.service';

export default angular.module('login', [uirouter])
  .config(routing)
  .controller('LoginController', LoginController)
  .service("loginService",LoginService)
  .name;