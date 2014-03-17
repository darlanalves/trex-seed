angular.module('user', ['common', 'auth'])

.config(['$stateProvider', 'templatePath', 'registerRoutes',
	function($stateProvider, templatePath, registerRoutes) {
		registerRoutes($stateProvider, {
			'user': {
				url: '/user',
				views: {
					'root': {
						templateUrl: templatePath('user/view.html'),
						controller: 'UserViewController'
					}
				}
			}
		});
	}
]);