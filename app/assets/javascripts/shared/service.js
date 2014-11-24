angular.module('happyHrApp')

.service('api', function($http){

  return {

    getBusinesses: function(){

      var promise = $http.get('/api/businesses')
      .then(function(response) {
        return response;
      })

      return promise;

    },

    // Add phone number back into the function below later
    createBusiness: function(businessName, businessAddr, businessPriceRange, businessWebsite, businessRating) {

      $http.post('/api/businesses',  { name: businessName,  address: businessAddr,  price: businessPriceRange, website: businessWebsite, rating: businessRating})
        // number: businessPhone,
    }
  }
});