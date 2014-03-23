angular.module('trex')

.config(['$stateProvider', 'templatePath', 'registerRoutes',
	function($stateProvider, templatePath, registerRoutes) {
		registerRoutes($stateProvider, {
			'user-profile': {
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