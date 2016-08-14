(function () {
  angular
    .module('app')
    .directive('onChangeScrollDown', $timeout => ({
      restrict: 'A',
      link: (scope, element, attrs) => {
        const collectionToWatch = attrs.onChangeScrollDown;
        const watcherKill = scope.$watch(collectionToWatch, watcher, true);

        function scrollDown() {
          const scrollTop = element.prop('scrollHeight');

          element
            .stop()
            .animate({scrollTop});
        }

        function watcher(newVal, oldVal) {
          const isUpdated = _.last(newVal).id !== _.last(oldVal).id;

          if (isUpdated) scrollDown();
        }

        $timeout(scrollDown);
        element.on('$destroy', watcherKill);
      }
    }));
})();
