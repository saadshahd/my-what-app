angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/chats/1');

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      template: '<app class="screen"></app>'
    })
    .state('chats', {
      url: 'chats',
      abstract: true,
      parent: 'app',
      template: '<chats class="row expanded collapse"></chats>'
    })
    .state('chats.item', {
      url: '/:id',
      template: '<chat-item class="chat"></chat-item>'
    });
}
