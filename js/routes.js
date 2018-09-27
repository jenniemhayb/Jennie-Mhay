angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('contacts', {
    url: '/page4',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('apple', {
    url: '/page5',
    templateUrl: 'templates/apple.html',
    controller: 'appleCtrl'
  })

  .state('banana', {
    url: '/page6',
    templateUrl: 'templates/banana.html',
    controller: 'bananaCtrl'
  })

  .state('carrots', {
    url: '/page7',
    templateUrl: 'templates/carrots.html',
    controller: 'carrotsCtrl'
  })

  .state('adding', {
    url: '/page8',
    templateUrl: 'templates/adding.html',
    controller: 'addingCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});