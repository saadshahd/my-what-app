angular
  .module('app')
  .factory('userService', userService);

function userService(userSchema, helperService) {
  let user;

  activate();

  return {
    get
  };

  function activate() {
    user = helperService.jsonise(jsf(userSchema));
  }

  function get() {
    return user;
  }
}
