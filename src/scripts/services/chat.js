angular
  .module('app')
  .factory('chatService', chatService);

function chatService(chatsSchema, helperService) {
  return {
    getAll: getAll
  };

  function getAll() {
    const chatList = helperService.jsonise(jsf(chatsSchema));
    return helperService.promisify(chatList);
  }
}
