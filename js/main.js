;(function(){

angular.module('designChallenge', [])
  .controller('mainCtrl', function($scope, $http){

    $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dfa8b5756339d7482cb36d5653327010&tags=scenery&safe_search=1&extras=url_k&format=json&nojsoncallback=1&auth_token=72157662383907673-40eb4acaecea42a9&api_sig=525f7bc940c5fa0675218da2c63d3791")
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
