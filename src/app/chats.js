angular
  .module('app')
  .component('chats', {
    controller: ChatListCtrl,
    controllerAs: 'chats',
    templateUrl: 'app/chats.html'
  });

function ChatListCtrl(chatService) {
  const chats = this;

  chats.$onInit = loadList;
  chats.loadList = loadList;

  function loadList() {
    chatService.getAll()
      .then(updateListView)
      .catch(console.error);
  }

  function updateListView(list) {
    chats.list = chats.list ? chats.list.concat(list) : list;
  }
}
