/**
 * Created by rbailey on 24/10/2014.
 */
var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res){
    jobsData.findJobs().then(function(collection){
        res.send(collection);
    });
});

app.get('*', function(req, res){
    res.render('index');
})

jobsData.connectDb('mongodb://dev1:Oct2014Oct@ds063859.mongolab.com:63859/jobfinder')
    .then(function(){
        console.log('Connected to MongoDB ok');
        jobsData.seedJobs();
    });


app.listen(process.env.PORT || 3001);