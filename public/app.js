var App = angular.module('trex', []);

App.controller('TaskController', ['$scope', 'TaskService',
	function($scope, TaskService) {
		$scope.taskList = [];
		$scope.newTask = {
			done: false
		};

		TaskService.getList().then(function(list) {
			console.log(list);
			$scope.taskList = list;
		});

		$scope.markAsDone = function(task) {
			TaskService.updateTask(task).then(null, function() {
				// rollback
				task.done = !task.done;
			});
		};

		$scope.addTask = function() {
			console.log($scope.newTask);
			var name = $scope.newTask.name;
			if (!name) return;

			TaskService.createTask(name).then(function(response) {
				console.log(response);
				var task = response.data;

				if (task) {
					$scope.taskList.unshift({
						id: task._id,
						name: task.name,
						done: task.done
					});

					$scope.newTask.name = '';
				}
			});
		};
	}
]);

App.service('TaskService', ['$http', 'UserService',
	function($http, UserService) {
		return {
			getList: function() {
				return $http.get('/task').then(function(response) {
					return response && response.data || [];
				});
			},

			updateTask: function(task) {
				//var userId = UserService.getId();
				///user/' + userId + 
				return $http.put('/task/' + task._id, {
					done: task.done
				});
			},

			createTask: function(name) {
				return $http.post('/task', {
					name: name,
					done: false
				});
			}
		};
	}
]);

App.service('UserService', ['$http',
	function($http) {
		return {
			getId: function() {
				return this.$user.id;
			},

			login: function(email) {
				var me = this;
				return $http.get('/user', {
					filter: {
						email: email
					}
				}).then(function(response) {
					if (response.data) {
						return me.$user = response.data;
					}

					return null;
				});
			},

			signup: function(email) {
				return $http.post('/user', {
					email: email
				});
			}
		};
	}
]);