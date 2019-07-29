routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('/', {
      template: require('./user.home.html'),
      controller: 'userHome',
      url: '/',
      controllerAs: 'userHome',
       params: {
    	'welcomeMessage': '!!!!'
  		},
      resolve:{
      	welcomeMessage:function($stateParams){
      		return $stateParams.welcomeMessage;
      	}
      }
    });
}