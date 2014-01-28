var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', 'Product', function($scope, Product){
	$scope.products = Product.index();
	/*$http.get('/products.json').success(function(data){
		$scope.products = data;
	});*/
}]);

productControllers.controller('ProductDetailCtrl', 
	['$scope', '$routeParams', 'Product', function($scope, $routeParams, Product){
	$scope.product = Product.get({id: $routeParams.productId});
}]);

productControllers.controller('NewProductCtrl', 
	['$scope', '$routeParams', '$location', 'Product', function($scope, $routeParams, $location, Product){
	$scope.product = new Product();
	
	$scope.createProduct = function(){
		new_product = this.product;
		Product.save(new_product, function(response){			
			$location.path("/products/"+response.id);
		});
	};
	
}]);
