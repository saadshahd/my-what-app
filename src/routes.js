angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app class="screen"></app>'
    })
    .state('chats', {
      url: 'chats',
      parent: 'app',
      template: '<chats class="row expanded collapse"></chats>'
    })
    .state('chats.item', {
      url: '/:id',
      template: '<chat-item></chat-item>'
    });
}
