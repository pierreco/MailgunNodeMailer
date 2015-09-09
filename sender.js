var Nodemailer = require('./nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var templater = require('./templater');



function sendEmail(templateName, info){

var template = templater.generate(templateName);

template.render(info, function (err, results) {
  if (err) {
    return console.error(err)
  }
  console.log(results.html);

  Nodemailer.sendMail({
    from: info.senderEmail,
    to: info.receiverEmail,
    subject: info.subject,
    html: results.html,
    text: results.text
    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Response: ' + JSON.stringify(info));
      }
    });
})
};

module.exports = {
  sendEmail: sendEmail,
}


