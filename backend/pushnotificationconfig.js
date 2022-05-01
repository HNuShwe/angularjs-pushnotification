const webpush = require('web-push');

const VAPIDKeys = {
    "subject": "mailto: <example@gmail.com>",
    "publicKey": "public key generated on https://vapidkeys.com/",
    "privateKey": "private key generated on https://vapidkeys.com/"
}

// get client subscription config from frontend. When you run sample angluar js frontend, this subscription data will be on alert box or console.

const subscription =
{
"endpoint":"https://fcm.googleapis.com/fcm/send/eV2MCg2DSBg:APA91bEwQ3GmPKy3vIqsIBMpt-5_wEzM3VH5liTRppj5S-H_QTotklFRDqxzy6c5aLpfcASOWHV8oNOxP_ZcOFQTWu_2msMGOgVNrfRs2YNhIE9m9bYpkzdqwUZcXCalhlZmf73lK3hc",
"expirationTime":null,
"keys":{
    "p256dh":"BIptKxWDz_-My0dn2x51BRe0pk5EZbbjcWiT3c9EVBYSxxv6OsGqsln7m0qpETJCChhe00XZVb1OU_aVPz3NiyM",
    "auth":"N6qZJyl2yssL0dVNHqewkA"
}}
const options = {
  // gcmAPIKey: '< GCM API Key >',
  vapidDetails: {
        subject: VAPIDKeys.subject,
        publicKey: VAPIDKeys.publicKey,
        privateKey: VAPIDKeys.privateKey,
  },
  // timeout: <Number>
  TTL: 60,
  headers: {
    'content-type': 'application/json'
  },
  // contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >',
  // proxy: '< proxy server options >',
  // agent: '< https.Agent instance >'
}

// send notification
const pushnotification = {
    admin: (data)=>{
        const payload = {
            title: data.title + " Notification",
            url:"https://www.google.com",
            body: {
               info : data.info
            }
        };
        webpush.sendNotification(subscription, JSON.stringify(payload), options)
            .then((_) => {
                console.log('SENT!!!');
                console.log(_);
            })
            .catch((_) => {
                console.log(_);
        });
    }
}

module.exports = pushnotification;
