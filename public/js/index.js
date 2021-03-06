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
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});


socket.on('newLocationMessage', function(message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My Current location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'MachineGunJoe',
//   text: 'Hello!'
// }, function(data) {
//     console.log('Got it!', data);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if(!navigator.geolocation) {
    //Working in phone browser
    return alert('Geolocation not supported by your browser!');
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    // console.log(position);
  }, function () {
    alert('Unable to fetch location!');
  });
});
