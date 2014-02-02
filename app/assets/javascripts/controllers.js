/*
 * @author: Kalyan 
 */

var productControllers = angular.module('productControllers', []);

// Controller to save a review for a product
productControllers.controller('NewReviewCtrl', ['$scope', '$http', function($scope, $http){
	$scope.createReview = function(){
		var review = this.review;
		$scope.product = this.product;
		$http({
			url: '/products/'+$scope.product.id+'/reviews.json',
			method: 'POST',
			data: review
		}).success(function(response){
			$scope.product.reviews.push(response);
			$scope.review = null;
		});
	};
}]);

productControllers.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
	$scope.sendContactInfo = function(){
		var contact = this.contact;
		console.log(contact);
		$http({
			url: '/contact/deliver',
			method: 'POST',
			data: contact
		}).success(function(response){
			$('form').html(response.message);
			$scope.contact = null;
		});
	}
}]);

// Controller to get list of products along with review count
productControllers.controller('ProductListCtrl', ['$scope', 'Product', function($scope, Product){
	$scope.products = Product.index();	
}]);

// Controller to get detail product
productControllers.controller('ProductDetailCtrl', 
	['$scope', '$routeParams', 'Product', function($scope, $routeParams, Product){
	$scope.product = Product.get({id: $routeParams.productId});
}]);

// Controller to render new product page and to save the same to database
productControllers.controller('NewProductCtrl', 
	['$scope', '$routeParams', '$location', 'Product', function($scope, $routeParams, $location, Product){
	$scope.product = new Product();
	
	$scope.createProduct = function(){
		new_product = this.product;
		Product.save(new_product, function(response){			
			$location.path("/products/"+response.id);
		}).error(function(errors){
			console.log(errors);
		});
	};	
}]);

// Controller to render edit product page and to update the same to database
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
