angular
  .module('app')
  .constant('userSchema', {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        chance: 'name'
      },
      avatar: {
        type: 'url',
        chance: {
          url: {
            domain: 'placeimg.com',
            path: '/32/32/any?'
          }
        }
      }
    },
    required: [
      'name',
      'avatar'
    ]
  });
