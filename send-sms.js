const accountSid = 'ACb6a98650679a747cfd7fc8e3db5ea6b9';
const authToken = '4d68999dc38ab9e2b7d28e67f588cf63';

// process.env.TWILIO_ACCOUNT_SI = 'ACb6a98650679a747cfd7fc8e3db5ea6b9';
// process.env.TWILIO_AUTH_TOKEN = '4d68999dc38ab9e2b7d28e67f588cf63';
// process.env.MY_PHONE_NUMBER = '+16466376625';
console.log(process.env);

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+16466376625',
    from: '+14807256363',
    body: 'Here we go'
})
.then((message) => console.log(message.sid))
