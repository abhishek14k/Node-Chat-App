var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    //store res in variable
    //assert from match
    var from = '14k!';
    //assert text match
    var text = 'Satanic';
    var message = generateMessage(from, text);
    //assert createdAt is number
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});

  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';

    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});

  });
});
