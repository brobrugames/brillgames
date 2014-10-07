var io = require('socket.io').listen(3001);
var chat1 = io
    .of('/chat1')
    .on('connection', function (socket)
    {
        console.log('connection chat1');

        socket.on('disconnect', function ()
        {
            console.log('user disconnected chat1');
        });
        socket.on('foo_event', function (_data)
        {
            console.log(_data);
        });
    });

var chat2 = io
    .of('/chat2')
    .on('connection', function (socket)
    {
        console.log('connection chat2');

        socket.on('disconnect', function ()
        {
            console.log('user disconnected chat2');
        });
        socket.on('foo_event', function (_data)
        {
            console.log(_data);
        });
    });

var foo;