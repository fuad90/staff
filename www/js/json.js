angular.module('starter.json', [])

.factory('dataAll', function($http) {
    //var baseUrl = 'http://localhost/api/web/index.php/staff/';
    var baseUrl = 'http://192.168.0.128/api/web/index.php/staff/';
   
    return {
        getAll: function() {
            return $http.get(baseUrl+'index');
        },
    };
    
});
