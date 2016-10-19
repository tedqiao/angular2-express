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
                    user: 'centimaniinfo@gmail.com', // Your email id
                    pass: 'qiaojian123' // Your password
                }
            })

            var mailOptions = {
                from: 'centimaniinfo@gmail.com', // sender address
                to: 'janciao123@gmail.com', // list of receivers
                subject: 'Email Example', // Subject line
                text: "hello world!!", // plaintext body
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
                ;
            })
        });

        return router;
    }


}

Object.seal(nodeMailer);
export = new nodeMailer().routes;