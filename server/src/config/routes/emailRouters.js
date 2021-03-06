"use strict";
var express = require("express");
var nodemailer = require("nodemailer");
var ejs = require("ejs");
var fs = require("fs");
var templateString = fs.readFileSync(__dirname + '/../../view/emailTemplate.ejs', 'utf-8');
var router = express.Router();
var nodeMailer = (function () {
    function nodeMailer() {
    }
    Object.defineProperty(nodeMailer.prototype, "routes", {
        get: function () {
            router.post("", function (req, res) {
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS // Your password
                    }
                });
                var mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_TO,
                    subject: 'Info',
                    html: ejs.render(templateString, {
                        name: req.body.name,
                        email: req.body.email,
                        contact: req.body.contact
                    }) // You can choose to send an HTML body instead
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.json({ status: "error" });
                    }
                    else {
                        console.log('Message sent: ' + info.response);
                        res.json({ status: "ok" });
                    }
                });
            });
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return nodeMailer;
}());
Object.seal(nodeMailer);
module.exports = new nodeMailer().routes;
//# sourceMappingURL=emailRouters.js.map