angular
  .module('app')
  .constant('chatsSchema', {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          chance: {
            natural: {
              min: 1,
              max: 99
            }
          }
        },
        participants: {
          type: 'array',
          items: {
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
          },
          minItems: 1,
          maxItems: 8,
          uniqueItems: true
        },
        lastMessage: {
          type: 'string',
          chance: {
            sentence: {
              words: 5
            }
          }
        },
        lastActive: {
          type: 'date',
          chance: 'date'
        }
      },
      required: [
        'id',
        'participants',
        'lastMessage',
        'lastActive'
      ]
    },
    minItems: 6,
    maxItems: 24,
    uniqueItems: true
  });
