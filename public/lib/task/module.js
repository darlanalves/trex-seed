angular.module('task', ['common', 'auth'])

.config(['$stateProvider', 'templatePath', 'registerRoutes',
	function($stateProvider, templatePath, registerRoutes) {
		registerRoutes($stateProvider, {
			'task': {
				abstract: true,
				template: '<div ui-view="task"></div>'
			},

			'task.list': {
				url: '/task',
				views: {
					task: {
						templateUrl: templatePath('task/list.html'),
						controller: 'TaskListController'
					}
				}
			},

			'task.view': {
				url: '/task/:taskId',
				views: {
					task: {
						templateUrl: templatePath('task/view.html'),
						controller: 'TaskViewController'
					}
				}
			}
		});
	}
]);