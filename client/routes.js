angular.module("app", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state("registration", {
            url: "/registration",
            templateUrl: "./features/registration/registration.template.html",
            controller: "registrationController"
        })
        .state("success", {
            url: "/Success",
            templateUrl: "./features/success/success.template.html",
            controller: "successController"
        })
    $urlRouterProvider.otherwise("/registration");
});