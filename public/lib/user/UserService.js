angular.module('trex').service('UserService', ['$http',
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