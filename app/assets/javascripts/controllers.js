var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/products.json').success(function(data){
		$scope.products = data;
	});
}]);

productControllers.controller('ProductDetailCtrl', 
	['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$http.get('/products/'+$routeParams.productId+'.json').success(function(data){
		$scope.phone = data;
	});	
}]);