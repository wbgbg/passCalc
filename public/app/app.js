var app = angular.module('passApp',[]);

app.controller('passCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.submit = function() {
		console.log('hi:',$scope.inputPass);
        $http.post('/pass', {inputPass:$scope.inputPass}).success(function(data, status) {
        	$scope.outputPass = data;
        });
	}
}]);