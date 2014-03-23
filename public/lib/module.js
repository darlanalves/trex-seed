angular.module('trex', ['ngRoute', 'ngTouch', 'ui.router', 'defer']) //'ajoslin.mobile-navigate',

.constant('templatePath', function(path) {
	return path ? '/views/' + path : '';
})

.constant('registerRoutes', function($stateProvider, states) {
	// register states
	angular.forEach(states, function(stateConfig, stateName) {
		$stateProvider.state(stateName, stateConfig);
	});
})

.config(['$urlRouterProvider', '$stateProvider', 'templatePath', 'registerRoutes',
	function($urlRouterProvider, $stateProvider, templatePath, registerRoutes) {
		var defaultRouteCtrl = ['$state',
			function($state) {
				$state.transitionTo('task-list');
			}
		];

		registerRoutes($stateProvider, {
			'default': {
				url: '',
				controller: defaultRouteCtrl
			},

			'index': {
				url: '/',
				controller: defaultRouteCtrl
			}
		});

		$urlRouterProvider.otherwise('/404');
	}
])

.factory('$exceptionHandler', function() {
	return function(exception) {
		$(document.body).html(exception.message);
	};
});