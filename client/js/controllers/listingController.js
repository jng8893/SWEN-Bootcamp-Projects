angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
      Listings.create($scope.newListing).then(function(response)
      {
        //Push newListing from scope to Listings.
        $scope.listings.push($scope.newListing);
        //Clear $scope variable holding newListing.
        $scope.newListing = {};

        //Refresh listings on webpage.
        Listings.getAll().then(function(response)
        {
          $scope.listings = response.data;
        },
        function(error)
        {
          console.log('Unable to retrieve listings:', error);
        });

      }, function(error)
      {
        if (error)
        {
          console.log('Unable to add listing:', error);
        }
      });
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful,
		navigate back to 'listing.list'. Otherwise, display the error.
       */
          Listings.delete(id).then(function(response){
            console.log("Deleted: " + id);

            Listings.getAll().then(function(response) {
              $scope.listings = response.data;
            }, function(error) {
              console.log('Unable to retrieve listings:', error);
            });

          }, function(error){
            console.log('Unable to retrieve listings')
          });

    //    Listings.delete(id).then(function(response)
    //    {
    //      //Remove article from Listings at specified index.
    //      console.log("Deleting item with id: " + id);
    //      //Refresh listings on page.
    //      // Listings.getAll().then(function(response) {
    //      //   $scope.listings = response.data;
    //      // }, function(error) {
    //      //   console.log('Unable to retrieve listings:', error);
    //      // });
    //    },
    //    function(error){
    //      console.log('Unable to delete listing:', error);
    //    });
    //
    //    Listings.getAll().then(function(response) {
    //      $scope.listings = response.data;
    //    }, function(error) {
    //      console.log('Unable to retrieve listings:', error);
    //    });
    //
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
