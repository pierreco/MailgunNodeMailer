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