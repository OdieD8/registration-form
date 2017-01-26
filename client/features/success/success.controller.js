angular.module("app").controller("successController", function($scope, $state) {

    $scope.registration = function() {
        $state.go("registration");
    };
});