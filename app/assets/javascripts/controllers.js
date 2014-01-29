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

productControllers.controller('EditProductCtrl', ['$scope', 'Product', '$routeParams', '$location', '$http', 
	function($scope, Product, $routeParams, $location, $http){
		$scope.product = Product.get({id: $routeParams.id});
		
		$scope.updateProduct = function(){
			updated_product = this.product;
			// Written normal $http method for practise purpose instead of using service!!
			$http({
				method: 'PUT',
				url: '/products/'+updated_product.id+'.json',
				data: updated_product
			}).success(function(){				
				$location.path("/products/"+$scope.product.id);
			});
		};				
}]);
