var loginService = function() {
	this.$get = ['$http', '$q', function($http, $q) {
		return {
			login: function(username, password) {
				return $http.post('/login', 
					       {username:$scope.username,
					        password:$scope.username}
				);
			}
		}
	}]
}

module.exports = loginService;