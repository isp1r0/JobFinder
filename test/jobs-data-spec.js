/**
 * Created by rbailey on 24/10/2014.
 */

var expect = require('chai').expect;
var mongoose = require('mongoose');
var Promise = require('bluebird');
var jobsData = require('../jobs-data');

function resetJobs(){
    return new Promise(function(resolve, reject){
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

describe('get jobs', function () {
    var jobList;

    before(function(done){
        jobsData.connectDb('mongodb://dev1:Oct2014Oct@ds063859.mongolab.com:63859/jobfinder')
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection){
                jobList = collection;
                done();
            });
    })

    it('should never retrun empty collection as jobs are seeded', function(){
        expect(jobList.length).to.be.at.least(1);
    });

    it("should have a description", function(){
        expect(jobList[0].description).to.not.be.empty;
    })

    it("should have a title", function(){
        expect(jobList[0].title).to.not.be.empty;
    })
})