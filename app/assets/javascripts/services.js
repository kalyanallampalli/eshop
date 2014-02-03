var service = angular.module('productService', ['ngResource']);

service.factory('Product', ['$resource', function($resource){
	return $resource('/products/:id.json', {}, {
		index: {method:'GET', isArray:true},
		get: {method:'GET', params:{id:'product'}},
		save: {method:'POST'},
		update: {method:'PUT', params:{id:'product'}},
		destroy: {method:'delete', params:{id:'product'}}
	});
}]);

service.factory('Cart', ['$resource', function($resource){
	return $resource('/cart.json', {}, {
		get: {method:'GET'},
		save: {method:'POST'},
		destroy:{method:'delete', params:{id:'citem'}}
	});
}]);
