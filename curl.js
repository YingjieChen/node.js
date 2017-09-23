var request = require('request');
request({
	url:'https://api.bigcommerce.com/stores/mupfj0r99n/v3/catalog/products',
	headers: {
		"content-type"	: "application/json",
		"Accept"	: "application/json",
		"X-Auth-Client"	: "76kgadnfn2ty0f9hjqut51a0atsa3s0",
		"X-Auth-Token"	: "8ghmkvnik47e386y4g5vy3ek77zm638",
	},	
}, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body) // Show the HTML for the baidu homepage.
	}
})
