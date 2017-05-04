

(function() {


var app = angular.module('myApp', []);


app.controller('AppController', [ '$scope', function($scope) {

	$scope.newUser = {};
	$scope.message = '';

	$scope.users = [{ name : 'Lanre Agbenla', username : 'hercoolhis', email : 'agbenla.lanre@gmail.com'}, {name : 'Segun Olowolagba', username : 'drniyi', email : 'segun.drniyi@gmail.com'}];


	$scope.saveUser = function() {

		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = 'User added Successfully';
	}

	$scope.selectUser = function(user) {

		console.log(user);
		$scope.clickedUser = user;
	}
	
	$scope.updateUser = function(user){

		$scope.message = 'User updated Successfully';

	}

	$scope.deleteUser = function(user){

		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = 'User deleted Successfully';		
	}

	$scope.clearMessage = function(){

		$scope.message = '';		
	}

		

}]);

app.controller('BookController', [ '$scope', '$timeout', function($scope, $timeout) {


		

}]);

















})(); 









