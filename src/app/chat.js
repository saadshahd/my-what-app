
angular
  .module('app')
  .component('chatItem', {
    controller: ChatCtrl,
    controllerAs: 'chat',
    templateUrl: 'app/chat.html'
  });

function ChatCtrl(chatService) {
  const chat = this;

  chat.$onInit = load;
  chat.load = load;

  function load() {
    chatService.get()
      .then(updateView)
      .catch(console.error);
  }

  function updateView(item) {
    console.log(item);
    chat.data = item;
  }
}
