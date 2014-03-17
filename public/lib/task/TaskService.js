angular.module('task').service('TaskService', ['$http', 'rejected',
	function($http, rejected) {
		return {
			findAll: function() {
				return $http.get('/task').then(function(response) {
					return response && response.data || [];
				});
			},

			updateTask: function(task) {
				//var userId = UserService.getId();
				///user/' + userId + 
				return $http.put('/task/' + task._id, task);
			},

			createTask: function(name) {
				return $http.post('/task', {
					name: name,
					done: false
				});
			},

			removeById: function(id) {
				return $http.delete('/task/' + id);
			},

			findById: function(id) {
				if (!id) {
					return rejected(new Error('Missing id'));
				}

				return $http.get('/task/' + id).then(function(response) {
					return response.data || null;
				});
			}
		};
	}
]);