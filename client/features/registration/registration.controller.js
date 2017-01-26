angular.module("app").controller("registrationController", function($scope, $state, registrationService) {

    $scope.submitButton = true;
	$scope.creditCard = false;
	$scope.ach = false;
    $scope.terms = false;
    var carriersUsed = [];
    var ltlCarriersUsed = [];
    var rateshops = [];
    var scale;
    var labelPrinter;
    var reportPrinter;

    $scope.agreement = function() {
        if($scope.agree === "no") {
            $scope.submitButton = false;
            $scope.terms = true;
        }
        if($scope.agree === "yes") {
            $scope.submitButton = true;
            $scope.terms = false;
        }
    }

	$scope.billingType = function() {
		if($scope.billing.type === "creditCard") {
			$scope.creditCard = true;
			$scope.ach = false;
		}
		if($scope.billing.type === "ach") {
			$scope.ach = true;
			$scope.creditCard = false;
		}
	};

    $scope.submittedForm = function() {
        
        //$scope.submitButton = false;
        var shippingPhone = $scope.shippingPhone.toString();
        shippingPhone = shippingPhone.slice(0,3) + "-" + shippingPhone.slice(3,6) + "-" + shippingPhone.slice(6);
        var itPhone = $scope.itPhone.toString();
        itPhone = itPhone.slice(0,3) + "-" + itPhone.slice(3,6) + "-" + itPhone.slice(6);
        
        if ($scope.canpostChecked === true) {
            carriersUsed.push({
                Name: "Canada Post",
                AccountNumber: $scope.canpostAcct,
                Username: $scope.canpostUser,
                Password: $scope.canpostPass
            });
        }
        
        if ($scope.canparChecked === true) {
             carriersUsed.push({
                Name: "Canpar",
                AccountNumber: $scope.canparAcct,
                Username: $scope.canparUser,
                Password: $scope.canparPass
            });
        }
        
        if ($scope.dhlChecked === true) {
             carriersUsed.push({
                Name: "DHL",
                AccountNumber: $scope.dhlAcct,
                Username: $scope.dhlUser,
                Password: $scope.dhlPass
            });
        }
        
        if ($scope.fedexChecked === true) {
             carriersUsed.push({
                Name: "FedEx",
                AccountNumber: $scope.fedexAcct,
                Username: $scope.fedexUser,
                Password: $scope.fedexPass
            });
        }
        
        if ($scope.fdxsmartChecked === true) {
             carriersUsed.push({
                Name: "FedEx SmartPost",
                AccountNumber: $scope.fdxsmartAcct,
                Username: $scope.fdxsmartUser,
                Password: $scope.fdxsmartPass
            });
        }
        
        if ($scope.landChecked === true) {
             carriersUsed.push({
                Name: "Landmark Global",
                landAcct: $scope.landAcct,
                landUser: $scope.landUser,
                landPass: $scope.landPass
            });
        }
        
        if ($scope.loomisChecked === true) {
             carriersUsed.push({
                Name: "Loomis",
                AccountNumber: $scope.loomisAcct,
                Username: $scope.loomisUser,
                Password: $scope.loomisPass
            });
        }
        
        if ($scope.newlogChecked === true) {
             carriersUsed.push({
                Name: "Newgistics",
                AccountNumber: $scope.newlogAcct,
                Username: $scope.newlogUser,
                Password: $scope.newlogPass
            });
        }
        
        if ($scope.ontracChecked === true) {
             carriersUsed.push({
                Name: "OnTrac",
                AccountNumber: $scope.ontracAcct,
                Username: $scope.ontracUser,
                Password: $scope.ontracPass
            });
        }
        
        if ($scope.purChecked === true) {
             carriersUsed.push({
                Name: "Purolator",
                AccountNumber: $scope.purAcct,
                Username: $scope.purUser,
                Password: $scope.purPass
            });
        }
        
        if ($scope.upsChecked === true) {
             carriersUsed.push({
                Name: "UPS",
                AccountNumber: $scope.upsAcct,
                Username: $scope.upsUser,
                Password: $scope.upsPass
            });
        }
        
        if ($scope.upsbChecked === true) {
             carriersUsed.push({
                Name: "UPS Basic",
                AccountNumber: $scope.upsbAcct,
                Username: $scope.upsbUser,
                Password: $scope.upsbPass
            });
        }
        
        if ($scope.upssChecked === true) {
             carriersUsed.push({
                Name: "UPS SurePost",
                AccountNumber: $scope.upssAcct,
                Username: $scope.upssUser,
                Password: $scope.upssPass
            });
        }
        
        if ($scope.upswChecked === true) {
             carriersUsed.push({
                Name: "UPS World Ease",
                AccountNumber: $scope.upswAcct,
                Username: $scope.upswUser,
                Password: $scope.upswPass
            });
        }
        
        if ($scope.uspsChecked === true) {
             carriersUsed.push({
                Name: "USPS",
                AccountNumber: $scope.uspsAcct,
                Username: $scope.uspsUser,
                Password: $scope.uspsPass
            });
        }
        
        if ($scope.wwexChecked === true) {
             carriersUsed.push({
                Name: "Worldwide Express",
                AccountNumber: $scope.wwexAcct,
                Username: $scope.wwexUser,
                Password: $scope.wwexPass
            });
        }
        
        if ($scope.ltl1Name) {
            ltlCarriersUsed.push({
                ltlName: $scope.ltl1Name,
                ltlAccountNumber: $scope.ltl1Acct,
                ltlLogin: $scope.ltl1Login,
                ltlPassword: $scope.ltl1Pass,
                ltlRated: $scope.ltl1Rated
            });
        }
        
        if ($scope.ltl2Name) {
            ltlCarriersUsed.push({
                ltlName: $scope.ltl2Name,
                ltlAccountNumber: $scope.ltl2Acct,
                ltlLogin: $scope.ltl2Login,
                ltlPassword: $scope.ltl2Pass,
                ltlRated: $scope.ltl2Rated
            });
        }
        
        if ($scope.ltl3Name) {
            ltlCarriersUsed.push({
                ltlName: $scope.ltl3Name,
                ltlAccountNumber: $scope.ltl3Acct,
                ltlLogin: $scope.ltl3Login,
                ltlPassword: $scope.ltl3Pass,
                ltlRated: $scope.ltl3Rated
            });
        }

        if ($scope.ltl4Name) {
            ltlCarriersUsed.push({
                ltlName: $scope.ltl4Name,
                ltlAccountNumber: $scope.ltl4Acct,
                ltlLogin: $scope.ltl4Login,
                ltlPassword: $scope.ltl4Pass,
                ltlRated: $scope.ltl4Rated
            });
        }

        if ($scope.ltl5Name) {
            ltlCarriersUsed.push({
                ltlName: $scope.ltl5Name,
                ltlAccountNumber: $scope.ltl5Acct,
                ltlLogin: $scope.ltl5Login,
                ltlPassword: $scope.ltl5Pass,
                ltlRated: $scope.ltl5Rated
            });
        }
        
        if ($scope.rateshop1Name) {
            rateshops.push({
                rateshopName: $scope.rateshop1Name,
                rateshopServices: $scope.rateshop1Services
            });
        }

        if ($scope.rateshop2Name) {
            rateshops.push({
                rateshopName: $scope.rateshop2Name,
                rateshopServices: $scope.rateshop2Services
            });
        }

        if ($scope.rateshop3Name) {
            rateshops.push({
                rateshopName: $scope.rateshop3Name,
                rateshopServices: $scope.rateshop3Services
            });
        }

        if ($scope.rateshop4Name) {
            rateshops.push({
                rateshopName: $scope.rateshop4Name,
                rateshopServices: $scope.rateshop4Services
            });
        }
        
        if ($scope.scaleMake) {
            scale = {
                scaleMake: $scope.scaleMake,
                scaleModel: $scope.scaleModel,
                scaleConnectionType: $scope.scaleConnType
            };
        }

        if ($scope.labelPrinterMake) {
            labelPrinter = {
                labelPrinterMake: $scope.labelPrinterMake,
                labelPrinterModel: $scope.labelPrinterModel,
                labelPrinterConnectionType: $scope.labelPrinterConnType
            };
        }
            
        if ($scope.reportDocsPrinterMake) {
            reportPrinter = {
                reportPrinterMake: $scope.reportDocsPrinterMake,
                reportPrinterModel: $scope.reportDocsPrinterModel,
                reportPrinterConnectionType: $scope.reportDocsPrinterConnType
            };
        }
        
        var formData = {
            companyName: $scope.companyName,
            address: $scope.address,
            suite: $scope.suite,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            locations: $scope.locations,
            stations: $scope.stations,
            transactions: $scope.transactions,
            goLive: $scope.goLive,
            shippingName: $scope.shippingName,
            shippingPhone: shippingPhone,
            shippingEmail: $scope.shippingEmail,
            itName: $scope.itName,
            itPhone: itPhone,
            itEmail: $scope.itEmail,
            carriersUsed: carriersUsed,
            ltlCarriersUsed: ltlCarriersUsed,
            rateshops: rateshops,
            scale: scale,
            labelPrinter: labelPrinter,
            reportPrinter: reportPrinter,
            questionnaire: {
                intQuest: $scope.intQuest,
                intReportQuest: $scope.intReportQuest,
                negotiatedOrListedRates: $scope.negotiatedOrListedRates,
                hazmat: $scope.hazmat,
                specialServices: $scope.specialServices,
                dockTimes: $scope.dockTimes,
                softwareFeatures: $scope.softwareFeatures,
                shippingStation: $scope.shippingStation,
                labelReqs: $scope.labelReqs,
                teamViewerAvail: $scope.teamViewerAvail,
                database: $scope.database,
                pkgIns: $scope.pkgIns,
                batchShip: $scope.batchShip,
                shipmentData: $scope.shipmentData
            },
            shipmentProcess: $scope.shipmentProcess,
            businessRules: $scope.businessRules,
            notesForms: $scope.notesForms
        }
        registrationService.register(formData);

        registrationService.sendMail(formData).then(function(response) {
            $state.go("success");
        }, function(error) {
            alert("Error encountered " + error);
            console.log(error);
            $scope.submitButton = true;
        });
    }
});