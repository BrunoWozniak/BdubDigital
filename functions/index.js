require("dotenv").config();
const nodemailer = require("nodemailer");
const functions = require('firebase-functions');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require('cors')({ origin: true });

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  return transporter;
};

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
  //for testing purposes
  console.log(
    'from sendEmail function. The request object is:',
    JSON.stringify(req.body)
  );

  //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const email = req.body.email;
    const name = req.body.name === undefined ? "No name" : req.body.name;
    const subject = req.body.subject;
    const message = req.body.message === undefined ? "No message" : req.body.message;
    const redirect = req.body.redirect;

    //config the email message
    const emailOptions = {
      replyTo: email,
      sender: email,
      to: process.env.EMAIL,
      subject: subject,
      text: `${name} - ${email} says:\n${message}`,
    };

    createTransporter().then(emailTransporter => {
      return emailTransporter.sendMail(emailOptions, (error, info) => {
        if (error) {
          return res.status(500).send({
            data: {
              status: 500,
              message: error.toString(),
            },
          });
        }
  
        return res.location(redirect).status(301).send({
          data: {
            status: 301,
            message: 'sent',
          },
        });
      });
    });
  });
});