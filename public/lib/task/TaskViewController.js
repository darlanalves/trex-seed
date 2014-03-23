angular.module('trex').controller('TaskViewController', ['$scope', '$state', '$stateParams', 'TaskService',
	function($scope, $state, $stateParams, TaskService) {
		var taskId = $stateParams.taskId;

		TaskService.findById(taskId).then(function(task) {
			$scope.task = task;
		});

		function goBack() {
			$state.transitionTo('task-list');
		}

		$scope.backToList = goBack;

		$scope.removeTask = function() {
			TaskService.removeById(taskId).then(function() {
				goBack();
			});
		};
	}
]);