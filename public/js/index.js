var socket = io();
socket.on('connect', function() {
    console.log('Connected to the server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(email) {
    console.log('New message', email);
});

socket.on('userJoined', function(message) {
    console.log(message.from + ': ' + message.text);
});