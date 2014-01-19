var eShop = angular.module('eShop', [
	'ngRoute',
	'productControllers'
]);

eShop.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/products', {
			templateUrl: '/assets/product-list.html',
			controller: 'ProductListCtrl'
		})
		.when('/products/:productId', {
			templateUrl: '/assets/detail-product.html',
			controller: 'ProductDetailCtrl'
		}).
		when('/', {
			templateUrl: '/assets/product-list.html',
			controller: 'ProductListCtrl'	
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);
