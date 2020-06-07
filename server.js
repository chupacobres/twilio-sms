// This code creates an express app that handles a post request when 
// message is sent to my Twilio number. Twilio can't access the local host
// so ngrok is needed to allow access to port 1337 over http.
// Install ngrok and type ngrok http 1337. ngrok will create a public addressabel
// url that Twilio can use for the post request
// In Twilio's console, under the messaging section of the Twilio number under "a message comes in",
// paste the ngrok url followed by /sms (post route of the express app) and save.

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.post('/sms', (req, res)=> {
    const twiml = new MessagingResponse();

    twiml.message('Thank you for messaging Juan\'s Twilio number');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});