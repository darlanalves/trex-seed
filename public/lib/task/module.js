angular.module('trex')

.config(['$stateProvider', 'templatePath', 'registerRoutes',
	function($stateProvider, templatePath, registerRoutes) {
		registerRoutes($stateProvider, {
			'task-list': {
				url: '/task',
				templateUrl: templatePath('task/list.html'),
				controller: 'TaskListController'
			},

			'task-view': {
				url: '/task/:taskId',
				templateUrl: templatePath('task/view.html'),
				controller: 'TaskViewController'
			}
		});
	}
]);