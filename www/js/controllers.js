angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope,$state){
        
})

.controller('tabCtrl', function($scope){
})

// this to get all data 
.controller('listCtrl', function($scope, dataAll){
    $scope.showData = function() {
      dataAll.getAll().success(function(data) {
            $scope.datastaffs = data; 
        })
    };
    $scope.showData();
    
})


