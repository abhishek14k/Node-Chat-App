var socket = io();

socket.on('connect', () => {
  console.log('Connected to server!');
  // 
  // socket.emit('createMessage', {
  //   from: '14K!',
  //   text: 'Aprilia RSV4 RR'
  // });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server!');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
