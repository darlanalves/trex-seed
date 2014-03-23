angular.module('trex').service('TaskService', ['$http', 'rejected',
	function($http, rejected) {
		return {
			findAll: function(conditions) {
				var filter = '';

				if (conditions) {
					filter = $.param({
						filter: conditions
					});
				}

				return $http.get('/task?' + filter).then(function(response) {
					return response && response.data || [];
				});
			},

			findDone: function() {
				return this.findAll({
					done: true
				});
			},

			findPending: function() {
				return this.findAll({
					done: false
				});
			},

			updateTask: function(task) {
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