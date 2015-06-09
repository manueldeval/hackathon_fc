var loginService = function() {
	this.$get = ['$http', '$q', function($http, $q) {
		return {
			getUser: function() {
				return $http.get('/auth/user')
							.then(function(result) {
								if (result.data) {
									return result.data;
								} else {
									throw new Error("Unauthorized");
								}
							})
			},
			logout: function() {
				return $http.get('/auth/logout')
				            .then(function(result) {
				            	return result.data;
				            });
			}
		}
	}]
}

module.exports = loginService;