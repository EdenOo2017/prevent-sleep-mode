var express = require('express');
var app = express();
const server = require('http').createServer(app);
const request = require('request');

const port = process.env.PORT || 3000;

app.set('port', port);
app.use('/', express.static(__dirname + '/www'));

server.listen(port, () => {
  console.log('Server is up');
});

setInterval(function() {
    request({
        url: 'https://stark-depths-96320.herokuapp.com/getBlock',
        json: true
      }, (error, response, body) => {   
        if (!error && response.statusCode == 200)    
        console.log(JSON.stringify(body.BLOCK[0]));
      });
}, 300000); // every 3 minutes 