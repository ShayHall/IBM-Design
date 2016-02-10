;(function(){

angular.module('designChallenge', [])
  .controller('mainCtrl', function($scope, $http){

    $http.get("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=1a8a3d3424a47f34d738bf49f89d1014&extras=url_k&per_page=50&page=1&format=json&nojsoncallback=1&auth_token=72157663798098539-18f7e453b9b5f684&api_sig=50abe2c9b6ca7b316762730762e1fbaa")
    .then(function(data){
      $scope.photos = data.data.photos.photo;
    })

    $http.get("api/content.json")
    .then(function(response){
      $scope.contents = response.data;
      $scope.paragraph_1s = response.data.paragraph_1;
      $scope.paragraph_2s = response.data.paragraph_2;
      $scope.paragraph_3s = response.data.paragraph_3;
      $scope.paragraph_4s = response.data.paragraph_4;
      $scope.paragraph_5s = response.data.paragraph_5;
      $scope.paragraph_6s = response.data.paragraph_6;
    })
  })//END mainCtrl

var headerHeight = $("#header").height();

$('a[href="#pOne"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

$('a[href="#pTwo"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});
$('a[href="#paraTwo"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000);
});

$('a[href="#pThree"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

$('a[href="#pFour"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

$('a[href="#pFive"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

$('a[href="#pSix"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

$('a[href="#top"]').on("click", function() {
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 500);
});

})(); //END IIFE
