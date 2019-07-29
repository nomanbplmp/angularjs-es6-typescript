routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login'
    });
}