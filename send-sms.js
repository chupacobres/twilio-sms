// Add your credentials and destination numbers as environment variables 
// in a twilio.env file and source them by typing source ./twilio.env 
// on the command line:
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+14807256363',
    body: 'Here we go again'
})
    .then((message) => console.log(message.sid))


