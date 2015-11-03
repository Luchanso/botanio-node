# botanio-node
Botanio for node https://github.com/botanio/sdk/

Example use:
```js
var botan = require('botanio')(token);

botan.track(message, 'Name', function(error, response, body) {
  if (error) {
    throw error;
  } else {
    console.log(response);
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

