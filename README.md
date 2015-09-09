
##NodeMailer + Mailgun + jade template

####Installation
```
$ npm install
```

####Configuration
Open [https://mailgun.com/app/domains](https://mailgun.com/app/domains)

Copy ```Domain name``` and ```API Key``` in config.js

####Test
```
$ node demo/test.js
```

#####Example
```javascript
var Sender = require('../sender');

var commandeInfo = {
  receiverEmail: 'test@yopmail.com',
  senderEmail : 'support@mycompany.com',
  subject : 'Billing e.g. invoices and receipts',
  receiverName: {
    first: 'Pierre',
    last: 'Cordier'
  },
  date:'June 01 2016',
  billing : {
    ref: '#1234',
    total : '33.98',
    service1 :{
      price: '19.99'
    },
    service2 :{
      price: '9.99'
    },
    service3 :{
      price: '4.00'
    }
  }
}

Sender.sendEmail('billing', commandeInfo);
```


####Library
[Node Email Templates](https://github.com/niftylettuce/node-email-templates)
[Transactional Email Templates](https://github.com/mailgun/transactional-email-templates/)
[Nodemailer](https://github.com/andris9/Nodemailer/)
[Nodemailer Mailgun Transport](https://github.com/orliesaurus/nodemailer-mailgun-transport)