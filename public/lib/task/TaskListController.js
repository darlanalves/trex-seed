angular.module('task').controller('TaskListController', ['$scope', '$state', 'TaskService', '$timeout',
	function($scope, $state, TaskService, $timeout) {
		$scope.newTask = {
			done: false
		};

		TaskService.findAll().then(function(list) {
			$scope.taskList = list;
		});

		$scope.markAsDone = function(task) {
			$timeout(function() {
				TaskService.updateTask(task).then(null, function() {
					// rollback on failure
					task.done = !task.done;
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

			$state.transitionTo('task.view', {
				taskId: task._id
			});
		};
	}
]);