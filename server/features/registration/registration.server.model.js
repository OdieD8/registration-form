var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Registration = new Schema({

    companyName: String,
    address: String,
    suite: String,
    city: String,
    state: String,
    zip: Number,
    locations: Number,
    stations: Number,
    transactions: Number,
    goLive: String,
    shippingName: String,
    shippingPhone: String,
    shippingEmail: String,
    itName: String,
    itPhone: String,
    itEmail: String,
    carriersUsed: [{ 
        Name: { type: String },
        AccountNumber: { type: String },
        Username: { type: String },
        Password: { type: String },
        _id: false,
		id: false
    }],
    ltlCarriersUsed: [{ 
        ltlName : { type: String },
        ltlAccountNumber: { type: String },
        ltlLogin: { type: String },
        ltlPassword: { type: String },
        ltlRated: { type: Boolean },
        _id: false,
		id: false 
    }],
    rateshops: [{ 
        rateshopName: { type: String },
        rateshopServices: { type: String },
        _id: false,
		id: false 
    }],
    scale: {
        scaleMake: String,
        scaleModel: String,
        scaleConnectionType: String 
    },
    labelPrinter: {
        labelPrinterMake: String,
        labelPrinterModel: String,
        labelPrinterConnectionType: String
    },
    reportPrinter: {
        reportPrinterMake: String,
        reportPrinterModel: String,
        reportPrinterConnectionType: String
    },
    questionnaire: {
        intQuest: String,
        intReportQuest: String,
        negotiatedOrListedRates: String,
        hazmat: String,
        specialServices: String,
        dockTimes: String,
        softwareFeatures: String,
        shippingStation: String,
        labelReqs: String,
        teamViewerAvail: String,
        database: String,
        pkgIns: String,
        batchShip: String,
        shipmentData: String
    },
    shipmentProcess: String,
    businessRules: String,
    notesForms: String,
    versionKey: false
});

module.exports = mongoose.model("Registration", Registration);