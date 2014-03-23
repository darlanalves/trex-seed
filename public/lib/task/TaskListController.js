angular.module('trex').controller('TaskListController', ['$scope', '$state', 'TaskService', '$timeout',
	function($scope, $state, TaskService, $timeout) {
		$scope.newTask = {};

		TaskService.findPending().then(function(list) {
			$scope.taskList = list;
		});

		$scope.toggleTask = function($event, task) {
			$event.stopPropagation();

			var taskToUpdate = angular.extend({}, task);
			taskToUpdate.done = !taskToUpdate.done;

			$timeout(function() {
				TaskService.updateTask(taskToUpdate).then(function() {
					task.done = taskToUpdate.done;
				}, function() {
					// rollback on failure
					task.done = !taskToUpdate.done;
				});
			});
		};

		$scope.addTask = function() {
			var name = $scope.newTask.name;

			if (!name) return;

			TaskService.createTask(name).then(function(response) {
				var task = response.data;

				if (task) {
					$scope.taskList.unshift(task);
					$scope.newTask.name = '';
				}
			});
		};

		$scope.openDetails = function($event, task) {
			$event.preventDefault();

			$state.transitionTo('task-view', {
				taskId: task._id
			});
		};
	}
]);