/**
 * Created by rbailey on 24/10/2014.
 */

app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, jobs){
    $scope.jobs = $resource('/api/jobs').query();
    //jobs.save({title: "test title", description: "test description"});
    //$scope.jobs = [
    //    {title: 'Sales Person', description: 'A cool job with loadsa money!'},
    //    {title: 'Technical Architect',description: 'Designing stuff that works!  How cool!'
    //    }];
    $scope.submit=function(){
        var newJob = {title: $scope.title, description: $scope.description};
        jobs.save(newJob);
        $scope.jobs.push(newJob);
    }
});