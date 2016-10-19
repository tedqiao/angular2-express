System.register(["express", "nodemailer", "ejs", "fs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, nodemailer, ejs, fs;
    var templateString, router, nodeMailer;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (nodemailer_1) {
                nodemailer = nodemailer_1;
            },
            function (ejs_1) {
                ejs = ejs_1;
            },
            function (fs_1) {
                fs = fs_1;
            }],
        execute: function() {
            templateString = fs.readFileSync(__dirname + '/emailTemplate.ejs', 'utf-8');
            router = express.Router();
            nodeMailer = (function () {
                function nodeMailer() {
                }
                Object.defineProperty(nodeMailer.prototype, "routes", {
                    get: function () {
                        router.post("", function (req, res) {
                            var transporter = nodemailer.createTransport({
                                service: 'Gmail',
                                auth: {
                                    user: 'centimaniinfo@gmail.com',
                                    pass: 'qiaojian123' // Your password
                                }
                            });
                            var mailOptions = {
                                from: 'centimaniinfo@gmail.com',
                                to: 'janciao123@gmail.com',
                                subject: 'Email Example',
                                text: "hello world!!",
                                html: ejs.render(templateString, {}) // You can choose to send an HTML body instead
                            };
                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                    res.json({ error: "error" });
                                }
                                else {
                                    console.log('Message sent: ' + info.response);
                                    res.json({ status: "ok" });
                                }
                                ;
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
        }
    }
});
//# sourceMappingURL=emailRouters.js.map