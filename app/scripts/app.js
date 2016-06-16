angular.module('happyBellyApp', ['ionic', 'ng-token-auth'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: 'views/sign_up.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/search.html'
    })
    .state('product-info', {
      url: '/product-info/:id',
      templateUrl: 'views/product_info.html'
    })

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });
});
