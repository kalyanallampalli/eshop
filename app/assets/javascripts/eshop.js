var eShop = angular.module('eShop', [
	'ngRoute',
	'productControllers'
]);

eShop.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/', {
			templateUrl: '/assets/products/product-list.html',
			controller: 'ProductListCtrl'	
		}).
		when('/products', {
			templateUrl: '/assets/products/product-list.html',
			controller: 'ProductListCtrl'
		})
		.when('/products/:productId', {
			templateUrl: '/assets/products/detail-product.html',
			controller: 'ProductDetailCtrl'
		}).
		when('/about', {
			templateUrl: '/assets/static/aboutus.html',
			controller: 'pageController'
		}).	
		when('/services', {
			templateUrl: '/assets/static/services.html',
			controller: 'pageController'
		}).
		when('/contact', {
			templateUrl: '/assets/static/contactus.html',
			controller: 'pageController'
		}).
		otherwise({
			//redirectTo: '/'
		});
	}
]);
