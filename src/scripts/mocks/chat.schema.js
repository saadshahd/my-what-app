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
            max: 9999
          }
        }
      },
      isActive: 'boolean',
      messages: {
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              chance: {
                natural: {
                  min: 1,
                  max: 9999
                }
              }
            },
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
            }
          },
          oneOf: [{
            properties: {
              image: {
                type: 'url',
                chance: {
                  url: {
                    domain: 'placeimg.com',
                    path: '/200/200/any?'
                  }
                }
              }
            }
          }, {
            properties: {
              text: {
                type: 'string',
                chance: {
                  sentence: {
                    words: 5
                  }
                }
              }
            }
          }],
          required: [
            'id',
            'participant',
            'image',
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
