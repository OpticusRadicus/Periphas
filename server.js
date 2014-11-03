var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
	res.json ([
	{
		username:'Jamie',
		body: 'Node Rules'
	}
	])
})

	app.listen(3000, function () {
		console.log('Server listining on', 3000)
	})