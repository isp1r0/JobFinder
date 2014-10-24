/**
 * Created by rbailey on 24/10/2014.
 */

var express = require('express');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
    res.render('index');
})

app.listen(process.env.PORT || 3001);