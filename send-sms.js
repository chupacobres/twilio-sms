// Add your credentials as environment variables in a twilio.env file and source them:
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+16466376625',
    from: '+14807256363',
    body: 'Here we go again'
})
.then((message) => console.log(message.sid))
