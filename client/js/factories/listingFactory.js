angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://shielded-spire-91160.herokuapp.com/api/listings');
    },

	create: function(listing) {
	  return $http.post('https://shielded-spire-91160.herokuapp.com/api/listings', listing);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       return $http.delete('https://shielded-spire-91160.herokuapp.com/api/listings/' + id);
    }
  };

  return methods;
});
