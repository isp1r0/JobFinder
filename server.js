/**
 * Created by rbailey on 24/10/2014.
 */
var express = require('express');
var mongoose = require('mongoose')
var jobModel = require('./models/Job')
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res){
    mongoose.model('Job').find({}).exec(function(error, collection){
        res.send(collection);
    });
});

app.get('*', function(req, res){
    res.render('index');
})

mongoose.connect('mongodb://dev1:Oct2014Oct@ds063859.mongolab.com:63859/jobfinder');
var con = mongoose.connection;
con.once('open', function(){
    console.log('Connected to MongoDB ok');
    jobModel.seedJobs();
});

app.listen(process.env.PORT || 3001);