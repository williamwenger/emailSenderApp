const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendgridAPIKey = process.env.API_KEY;

sgMail.setApiKey(sendgridAPIKey);

module.exports = sgMail;