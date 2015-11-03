# botanio-node
Botanio for node https://github.com/botanio/sdk/

Example use:
```js
var token = '1cbfbebc-79e9-48f4-89fc-5addab664745' // You can take it here: https://appmetrica.yandex.com/application
var botan = require('botanio-node')(token);

/**
 * Track your message
 * @param {Object} error 
 * @param {Object} response
 * @param {Object} body       {status: 'accepted'} or {status: 'bad request', info: '...'}
 * @param {Function} callback
 * @return {[type]}          [description]
 */
botan.track(message, 'Name', function(error, response, body) {
  if (error) {
    throw error;
  } else {
    console.log(body);
  }
});

/**
 Where message is:
  { message_id: 123,
  from:
   { id: 123456789,
     first_name: 'Victor',
     last_name: 'Petrov',
     username: '@example' },
  chat:
   { id: 123456789,
     first_name: 'Victor',
     last_name: 'Petrov',
     username: '@example',
     type: 'private' },
  date: 1445763097,
  text: 'Hello world!' }
 */
```