/**
 * Created by rbailey on 24/10/2014.
 */
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(error, collection){
        if (collection.length == 0){
            Job.create({title:'Cook', description:'Cooking up some splendid stuff'});
            Job.create({title:'Technical Architect', description:'The technical architect of the team...'});
            Job.create({title:'Scrum Master', description:'What did you do yesterday?  What you gonna do today?  Whats stopping progress?'});
            Job.create({title:'Performance Analyst', description:'Lets help the Service Manager build and amazing service for our citizens!'});
        }
    })
}