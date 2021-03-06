var token = '1cbfbebc-79e9-48f4-89fc-5addab664745';
var botan = require('../lib/app')(token);
var testMessage = { };
var status200 = 'accepted';

describe('BotanIO', function() {
  before(function(done) {
    testMessage = { message_id: 123,
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
        text: 'Hello world!' };

    done();
  });

  it('#tack(telegramMessage, tag, callback)', function(done) {
    botan.track(testMessage, 'Start', function(err, response, body) {
      body.status.should.be.eql(status200);

      done();
    });
  });
});
