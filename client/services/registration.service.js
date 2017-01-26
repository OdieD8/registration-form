angular.module("app").service("registrationService", function($q, $http) {

    this.register = function(formData) {
        return $http.post("/api/register", formData).then(function(response) {
            return response;
        }, function(error) {
            return error;
        });
    };

    this.sendMail = function(formData) {
        return $http.post("/api/send-mail", formData).then(function(response) {
            console.dir(response.data);
            console.log(response);
        }, function(error) {
            console.log("Send Mail Error " + error.data);
            console.log(error);
        });
    };
})