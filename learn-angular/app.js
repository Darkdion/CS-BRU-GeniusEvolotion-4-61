var app = angular.module("GamesTypeModule", []);
app.controller("InsertGameTypeCtr", function($rootScope, $scope) {
    $rootScope.InsertGameTypeRoot = "เพิ่มประเภทเกมส์ สาธารณะ";
    $scope.InsertGameType = "เพิ่มประเภทเกมส์ จำกัด";
});
app.controller("DeleteGameTypeCtr", function($rootScope, $scope) {
    $rootScope.DeleteGameTypeRoot = "ลบประเภทเกมส์ สาธารณะ";
    $scope.DeleteGameType = "ลบประเภทเกมส์ จำกัด";
});
app.controller("modelExCtr", function($rootScope, $scope) {
    $scope.number1 = 0;
    $scope.number2 = 0;
    $scope.total = 0;
    $scope.sum = function() {
        $scope.total = $scope.number1 + $scope.number2;
    };
});
app.controller("GameDetails", function($scope) {
    $scope.DataDetails = [
        { 'id': 1, 'name': 'กิตติ', 'lastname': 'เอาหมด' },
        { 'id': 2, 'name': 'พนม', 'lastname': 'มือ' }
    ];
    $scope.select = "";
    $scope.select2 = "";
    $scope.select3 = "";
    $scope.showTable = "";
    $scope.Open = function() {
        $scope.showTable = "A";
    };
    $scope.Close = function() {
        $scope.showTable = "";
    };
});