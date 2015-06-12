var dataService = function() {
	this.$get = ['$http', '$q', function($http, $q) {
		return {
			getFromDataset: function(dataset, q) {
				var path = '/data/dataset/' + dataset;
				if (q) {
					path += "?q=" + q;
				}
				return $http.get(path) 
							.then(function(result) {
								if (result.data) {
									return result.data;
								}
							})
			},
			getFromDatasets: function(datasets, q) {
				var path = '/data/dataset/s' + dataset.join(',');
				if (q) {
					path += "?q=" + q;
				}
				return $http.get(path) 
							.then(function(result) {
								if (result.data) {
									return result.data;
								}
							})
			}
		}
	}]
}

module.exports = dataService;