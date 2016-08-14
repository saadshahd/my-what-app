angular
  .module('app')
  .factory('helperService', helperService);

function helperService($q) {
  let jsonise;

  activate();

  return {
    jsonise,
    promisify
  };

  function activate() {
    jsonise = _.flow(angular.toJson, angular.fromJson);
  }

  function promisify(value) {
    return $q(function (resolve, reject) {
      if (value) resolve(value);
      else reject(value);
    });
  }
}
