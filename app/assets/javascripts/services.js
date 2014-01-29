var productService = angular.module('productService', ['ngResource']);

productService.factory('Product', ['$resource', function($resource){
	return $resource('/products/:id.json', {}, {
		index: {method:'GET', isArray:true},
		get: {method:'GET', params:{id:'product'}},
		save: {method:'POST'},
		update: {method:'PUT', params:{id:'product'}},
		destroy: {method:'delete', params:{id:'product'}}
	});
}]);
