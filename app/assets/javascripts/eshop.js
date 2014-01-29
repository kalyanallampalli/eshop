var eShop = angular.module('eShop', [
	'ngRoute',
	'productControllers',
	'productService'
]);

eShop.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/products/new', {
			templateUrl: '/assets/products/new.html',
			controller: 'NewProductCtrl'
		}).
		when('/products/:id/edit', {
			templateUrl: '/assets/products/edit.html',
			controller: 'EditProductCtrl'
		}).
		when('/products', {
			templateUrl: '/assets/products/product-list.html',
			controller: 'ProductListCtrl'
		}).
		when('/products/:productId', {
			templateUrl: '/assets/products/detail-product.html',
			controller: 'ProductDetailCtrl'
		}).
		otherwise({
			templateUrl: '/assets/products/product-list.html',
			controller: 'ProductListCtrl'	
		});
	}
]);
