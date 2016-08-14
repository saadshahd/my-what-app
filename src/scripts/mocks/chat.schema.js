angular
  .module('app')
  .constant('chatSchema', {
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
      isActive: 'boolean',
      messages: {
        items: {
          type: 'object',
          properties: {
            isMine: 'boolean',
            participant: {
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
            text: {
              type: 'string',
              chance: {
                sentence: {
                  words: 5
                }
              }
            }
          },
          required: [
            'participant',
            'text'
          ]
        },
        minItems: 1,
        maxItems: 24,
        uniqueItems: true
      }
    },
    required: [
      'id',
      'isActive',
      'messages'
    ]
  });
