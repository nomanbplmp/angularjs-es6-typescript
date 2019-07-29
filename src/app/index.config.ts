routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
	console.log("setting up app config")
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}