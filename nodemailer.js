var config = require('./config');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var authConfig = {
  auth: {
    api_key: config.api_key,
    domain: config.domain
  }
}

module.exports = nodemailer.createTransport(mg(authConfig));