import express = require("express");
import nodemailer = require("nodemailer");
import ejs = require("ejs");
import fs = require("fs");

var templateString = fs.readFileSync(__dirname + '/../../view/emailTemplate.ejs', 'utf-8');

var router = express.Router();

class nodeMailer {

    constructor() {

    }

    get routes() {

        router.post("", (req, res)=> {
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER, // Your email id
                    pass: process.env.EMAIL_PASS// Your password
                }
            })

            var mailOptions = {
                from: process.env.EMAIL_USER, // sender address
                to: process.env.EMAIL_TO, // list of receivers
                subject: 'Info', // Subject line
                html: ejs.render(templateString, {
                    name: req.body.name,
                    email: req.body.email,
                    contact: req.body.contact
                }) // You can choose to send an HTML body instead
            };

            transporter.sendMail(mailOptions, (error, info)=> {
                if (error) {
                    console.log(error);
                    res.json({status: "error"});
                } else {
                    console.log('Message sent: ' + info.response);
                    res.json({status: "ok"});
                }
            })
        });

        return router;
    }


}

Object.seal(nodeMailer);
export = new nodeMailer().routes;