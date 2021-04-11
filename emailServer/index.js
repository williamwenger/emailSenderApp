const sgMail = require('./account');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post('/', (req, res) => {
    sgMail.send({
        // gets email from login field in front end application//
        to: req.body.email,
        //email used to send emails //
        from: 'youremail@goesHere.com',
        subject: 'Recent Login',
        text: 'Someone trynna hack into your account....unless it you.'
    }).then(() => {
        console.log('Email sent')
        res.status(201).send('Email Sent');
    })
    .catch((error) => {
        res.status(400).send('No');
        console.error(error)
    })
});

app.listen(3000, () => console.log("Running server..."));