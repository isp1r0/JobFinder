/**
 * Created by rbailey on 24/10/2014.
 */

angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope){
    $scope.jobs = [
        {title: 'Sales Person', description: 'A cool job with loadsa money!'},
        {title: 'Technical Architect',description: 'Designing stuff that works!  How cool!'
    }];
});