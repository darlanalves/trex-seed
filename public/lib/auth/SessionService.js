angular.module('auth').service('SessionService', function() {
	var $profile = null;

	return {
		getProfile: function() {
			return $profile;
		},

		setProfile: function(profile) {
			$profile = profile;
		}
	};
});