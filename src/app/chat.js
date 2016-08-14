
angular
  .module('app')
  .component('chatItem', {
    controller: ChatCtrl,
    controllerAs: 'chat',
    templateUrl: 'app/chat.html'
  });

function ChatCtrl($scope, chatService, userService, Upload) {
  const chat = this;

  chat.$onInit = load;
  chat.load = load;
  chat.addImages = addImages;
  chat.viewAddText = viewAddText;

  function load() {
    chatService.get()
      .then(updateView)
      .catch(console.error);
  }

  function updateView(item) {
    chat.data = item;
  }

  function generateMessage(data) {
    return _.defaults(data, {
      id: chance.natural({min: 1, max: 9999}),
      isMine: true,
      participant: Object.assign({}, userService.get())
    });
  }

  function addMessage(message) {
    chat.data.messages.push(message);
  }

  const createMessage = _.flow(generateMessage, addMessage);

  function addImages(files) {
    Upload
      .base64DataUrl(files)
      .then(images => {
        _.each(images, image => createMessage({image}));
      });
  }

  function addText(text) {
    createMessage({text});
  }

  function viewAddText() {
    addText(chat.addTextField);
    chat.addTextField = '';
  }
}
