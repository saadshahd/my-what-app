(function () {
  angular
    .module('app')
    .directive('onEnter', () => ({
      restrict: 'A',
      link: (scope, element, attrs) => {
        element.on('keydown keypress', e => {
          if (e.which === 13 && !e.shiftKey) {
            scope.$apply(() => scope.$eval(attrs.onEnter));
            e.preventDefault();
          }
        });
      }
    }));
})();
