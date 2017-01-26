var mongoose = require("mongoose");
var registration = require("./registration.server.model");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
var config = require("../../config.js");
var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var JSZip = require('jszip');

module.exports = {

    register: function (req, res) {

        var data = new registration(req.body);
        data.save(function (err) {
            if (err) res.send(err);
            else res.json(data);
        });
    },

    sendMail: function (req, res) {

        var data = req.body;

        var mailer = nodemailer.createTransport({
            service: "gmail",
            auth: config.auth
        });

        mailer.use("compile", hbs({
            viewPath: __dirname,
            extName: ".hbs"
        }));

        var mailData = {
            from: "services@shipsource.com",
            to: "support@shipsource.com",
            subject: "New Customer: " + data.companyName,
            template: "registration-info",
            attachments: {
                filename: data.companyName + "_registration.docx",
                path: __dirname + "/registered/" + data.companyName + "_registration.docx"
            },
            context: {
                company: data.companyName,
                address: data.address,
                suite: data.suite,
                city: data.city,
                state: data.state,
                zip: data.zip,
                locations: data.locations,
                stations: data.stations,
                transactions: data.transactions,
                goLive: data.goLive,
                shippingName: data.shippingName,
                shippingPhone: data.shippingPhone,
                shippingEmail: data.shippingEmail,
                itName: data.itName,
                itPhone: data.itPhone,
                itEmail: data.itEmail,
                carriersUsed: data.carriersUsed,
                ltlCarriersUsed: data.ltlCarriersUsed,
                rateshops: data.rateshops,
                scale: data.scale,
                labelPrinter: data.labelPrinter,
                reportPrinter: data.reportPrinter,
                questionnaire: data.questionnaire,
                shipmentProcess: data.shipmentProcess,
                businessRules: data.businessRules,
                notesForms: data.notesForms
            }
        };

        mailer.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server ready to take messages");
            }
        });

        mailer.sendMail(mailData, function(err, response) {
            if (err) res.send(err);
            else res.send(response);
        });
    },

    createDoc: function (req, res, next) {

        var content = fs.readFileSync(__dirname + "/RegistrationTemplate.docx", "binary");
        var data = req.body;
        var zip = new JSZip(content);
        var doc = new Docxtemplater().loadZip(zip)

        doc.setData({
                company: data.companyName,
                address: data.address,
                suite: data.suite,
                city: data.city,
                state: data.state,
                zip: data.zip,
                locations: data.locations,
                stations: data.stations,
                transactions: data.transactions,
                goLive: data.goLive,
                shippingName: data.shippingName,
                shippingPhone: data.shippingPhone,
                shippingEmail: data.shippingEmail,
                itName: data.itName,
                itPhone: data.itPhone,
                itEmail: data.itEmail,
                carriersUsed: data.carriersUsed,
                ltlCarriersUsed: data.ltlCarriersUsed,
                rateshops: data.rateshops,
                scaleMake: data.scale.scaleMake,
                scaleModel: data.scale.scaleModel,
                scaleConnectionType: data.scale.scaleConnectionType,
                labelPrinterMake: data.labelPrinter.labelPrinterMake,
                labelPrinterModel: data.labelPrinter.labelPrinterModel,
                labelPrinterConnectionType: data.labelPrinter.labelPrinterConnectionType,
                reportPrinterMake: data.reportPrinter.reportPrinterMake,
                reportPrinterModel: data.reportPrinter.reportPrinterModel,
                reportPrinterConnectionType: data.reportPrinter.reportPrinterConnectionType,
                intQuest: data.questionnaire.intQuest,
                intReportQuest: data.questionnaire.intReportQuest,
                negotiatedOrListedRates: data.questionnaire.negotiatedOrListedRates,
                hazmat: data.questionnaire.hazmat,
                specialServices: data.questionnaire.specialServices,
                dockTimes: data.questionnaire.dockTimes,
                softwareFeatures: data.questionnaire.softwareFeatures,
                shippingStation: data.questionnaire.shippingStation,
                labelReqs: data.questionnaire.labelReqs,
                teamViewerAvail: data.questionnaire.teamViewerAvail,
                database: data.questionnaire.database,
                pkgIns: data.questionnaire.pkgIns,
                batchShip: data.questionnaire.batchShip,
                shipmentData: data.questionnaire.shipmentData,
                shipmentProcess: data.shipmentProcess,
                businessRules: data.businessRules,
                notesForms: data.notesForms
        });

        doc.render();

        var buf = doc.getZip().generate({ type: "nodebuffer" });

        fs.writeFileSync(__dirname + "/registered/" + data.companyName + "_registration.docx", buf);

        next();
    }
};