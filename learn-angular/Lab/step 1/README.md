# app.js
1. สร้าง Module
```javascript
var GameApp = angular.module('GameApp', [
    'GamesApp.controllers',
    'ngRoute',
]);
```
# controller.js 
2. สร้าง Module และ controller
```javascript
var appCrl = angular.module("GamesApp.controllers", []);
appCrl.controller("GamesController", function($scope, $route, GamesAppService, $http) {

});
```
# model.js 
3. สร้าง Service
```javascript
//game
appCrl.factory('GamesAppService', ["$http", function($http) {
   

}]);
//type game
appCrl.factory('TypeGameService', ["$http", function($http) {
    

}]);
```


# app.js 
4. การทำใช้ angular-router
```javascript
//ต่อจาก app module
GameApp.config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $routeProvider.when('/', {
            controller: '',
            templateUrl: 'views/layouts/showgame.html',
            activetab: 'dashboard'
        })
        .when('/games', {
            controller: 'GamesController',
            templateUrl: 'views/games/index.html',
            activetab: 'index'
        })
        .when('/games-category', {
            controller: 'GamesCategoryController',
            templateUrl: 'views/games-category/index.html',
            activetab: 'games-cate'
        }).otherwise({
            redirectTo: '/'
 });
});

```