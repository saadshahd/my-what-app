angular
  .module('app')
  .factory('chatService', chatService);

function chatService(chatsSchema, chatSchema, helperService) {
  return {
    get,
    getAll
  };

  function getAll() {
    const chatList = helperService.jsonise(jsf(chatsSchema));
    return helperService.promisify(chatList);
  }

  function get() {
    const chat = helperService.jsonise(jsf(chatSchema));
    return helperService.promisify(chat);
  }
}
