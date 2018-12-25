var expect = require('expect');

var {generateMessage} = require('./message');

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
