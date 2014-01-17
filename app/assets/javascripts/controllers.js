var eShop = angular.module('eShop', []);

eShop.controller('ProductListCtrl', function($scope, $http){
	
	$http.get('/products.json').success(function(data){
		$scope.products = data;
	});
	
	/*$scope.products = [
		{'name': 'Google Nexus', 'description': 'Babji\'s Nexus Phone', 'price': '250'},
		{'name': 'Apple iPhone', 'description': 'Apple new iphone', 'price': '250'},
		{'name': 'Motorola Razor', 'price': '250'},
		{'name': 'Nokia Lumia', 'price': '250'},
	];*/		
});
