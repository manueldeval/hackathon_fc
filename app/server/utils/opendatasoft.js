var Q = require('q');
var https = require('https');

function _capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var _genericAccessGet = function(accessToken,dataSet){
	//var url="https://datafranceconnect.opendatasoft.com/api/records/1.0/search/?dataset="+dataset+"&access_token="+accessToken;

	return Q.Promise(function(resolve, reject){
		var options = {
		  host: "datafranceconnect.opendatasoft.com",
		  port: 443,
		  path: "/api/records/1.0/search/?dataset="+dataSet+"&access_token="+accessToken,
		  method: 'GET'
		};

		https.request(options, function(res,err) {
			if (err){
				reject(err);
			};

			var responseString = "";
		    res.on('data', function(data) {
		    	responseString += data;
		    });

		    res.on('end', function() {
		      	var responseObject = JSON.parse(responseString);
		      	if (!responseObject.records ||
		      		responseObject.records.length == 0 ||
		      		!responseObject.records[0] ||
		      		!responseObject.records[0].fields){
		      		reject("No data");
		      	} else {
					var payloadFromODS = responseObject.records[0].fields;

					var userObject = {};
					Object.keys(payloadFromODS)
						.forEach(function(key){
							userObject[key] = {
								valeur:payloadFromODS[key],
								label : _capitalizeFirstLetter(key.replace(/_/g,' '))
							}
							return userObject;
						})
					resolve(userObject);
				}
		    });
		}).end();
	});
}





module.exports={
	getData:_genericAccessGet
}


