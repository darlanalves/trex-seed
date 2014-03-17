angular.module('common', ['ngRoute', 'ngTouch', 'ajoslin.mobile-navigate', 'ui.router'])

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
				$state.transitionTo('task.list');
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

.provider('deferred', function() {
	this.$get = ['$q', '$timeout', function($q, $timeout) {
		return function (value) {
			var defer = $q.defer();

			$timeout(function() {
				defer.resolve(value);
			});

			return defer.promise;
		};
	}];
})

.provider('rejected', function() {
	this.$get = ['$q', '$timeout', function($q, $timeout) {
		return function (error) {
			var defer = $q.defer();

			$timeout(function() {
				defer.reject(error);
			});

			return defer.promise;
		};
	}];
});