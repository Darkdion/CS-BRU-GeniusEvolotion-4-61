# เรียน angular เบื้องต้น
1. การใช้งาน angular.module
* ตัวอย่าง code JavaScript
   ```javascript
   var app = angular.module("GamesTypeModule", []);
   ```
* ตัวอย่าง code การเรียกใช้งานที่ html  โดยการเรียกใช้ module ที่ชื่อว่า  `ng-app="GamesTypeModule"` ดูตัวอย่าง ล่างข้อความนี้
 ```html
<html lang="en" ng-app="GamesTypeModule">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ng</title>
</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="./app.js"></script>
</body>
</html>
   ```
2. การใช้งาน Controller 
* ตัวอย่าง code JavaScript
```javascript
var app = angular.module("GamesTypeModule", []);
app.controller("InsertGameTypeCtr", function($rootScope, $scope) {
    $rootScope.InsertGameTypeRoot = "เพิ่มประเภทเกมส์ สาธารณะ";
    $scope.InsertGameType = "เพิ่มประเภทเกมส์ จำกัด";
});
```
* ตัวอย่าง code การเรียกใช้งานที่ html  โดยการเรียกใช้ module ที่ชื่อ ng ว่า  `ng-controller="InsertGameTypeCtr"` ดูตัวอย่าง ล่างข้อความนี้
```html
    <div ng-controller="InsertGameTypeCtr">
        {{InsertGameType}}
    </div>
     {{InsertGameTypeRoot}}
```