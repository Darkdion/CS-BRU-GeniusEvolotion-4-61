
<h2 > การ สร้าง Contoller  เพิ่ม ,ดู ,แก้ไข ,ลบ แก้ไข  เกมส์ (crud เกมส์)  </h2>
#controller.js
1. ฟังก์ชัน controller เรียกข้อมูลเกมส์มาแสดง

```javascript
// controller.js
// Contoller ที่ชื่อว่า GamesController
    $scope.showCreate = false;
    $scope.message = "ยินดีตอนรับ Games Online";
    $scope.updateG = false;
    $scope.GetDataGame = function() {
        $http.get('http://10.105.0.254:8080/game/findAll').then(function(res) {
            $scope.ListGames = res.data.result;
        });
    };

    GamesAppService.GetType().then(function(e) {
        $scope.Typegame = e.data.result;
        // console.log('get');
    });
    $scope.GetDataGame();
```

#สร้างฟังก์ชัน service เรียก api ข้อมูลเกมส์ ใน model.js
#model.js
2. ทำ Service model ดูข้อมูลเกมส์
```javascript
// model.js
appCrl.factory('GamesAppService', ["$http", function($http) {
    var facApp = {};
    //game type
    facApp.GetType = function() {
        return $http.get('http://10.105.0.254:8080/gametype/findAll');
    };
    // game
    facApp.GetGamesModel = function() {
        return $http.get('http://10.105.0.254:8080/game/findAll');
    };
    return facApp;
}]);
```
#ฟังก์ชัน controller เพิ่มเกมส์ 
สร้าง โฟลเดอร์

views/games/index.html
======================
 code 
 ```html
 <div ng-controller="GamesController">
    <div class="bs-header" id="content">
        <div class="container">
            <h1>{{message}}</h1>
        </div>
    </div>
    <div class="container">
        <div class="col-md-12">
            <br>
            <div class="input-group">
                <input type="text" class="form-control " ng-model="searchText" placeholder="ค้นหารายชื่อเกมส์ ...">
                <span class="input-group-btn">
                              <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i> ค้นหา</button>
                              <a class="btn btn-success" ng-click="Show()"><i class="glyphicon glyphicon-plus"></i> Add Games..</a>
             </span>
            </div>

            <div class="row">
                <!-- //create -->
                <div ng-show="showCreate">
                    <div class="panel panel-success">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{message}}</h3>
                        </div>
                        <div class="panel-body">
                            <form name="creategame" ng-submit="AddGames()">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">ชื่อเกมส์</label> {{name}}
                                        <input type="text" class="form-control" placeholder="ชื่อเกมส์..." ng-model="game.name" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">เลือกประเภทเกมส์</label>
                                        <select class="form-control" placeholder="ประเภทเกมส์..." ng-model="game.typeId" required>
                                                        <option disabled>เลือกประเภทเกมส์</option>
                                                          <option ng-repeat="tp in Typegame" ng-value="tp.id">{{tp.typeName}}</option>
                                                    </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">LinkImagesGames ( ความยาวไม่เกิน 255 / <span class="text-danger">{{game.imgUrl.length!=null?game.imgUrl.length:0}}</span> )</label>
                                        <textarea class="form-control" rows="3" placeholder="LinkImagesGames..." ng-model="game.imgUrl" ng-maxlength="255" required></textarea>
                                        </textarea>
                                    </div>
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-success " ng-disabled="!creategame.$valid"><i class="glyphicon glyphicon-save"></i> บันทึกข้อมูล</button>
                                    <button type="reset" class="btn btn-danger">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="">List Games</h1>
            <div ng-show="updateG">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{message}}</h3>
                    </div>
                    <div class="panel-body">
                        <form name="creategame" ng-submit="UpdateGames()">
                            <div class="row">
                                <div class="col-md-6 ">
                                    <div class="jumbotron">
                                        <img ng-src="{{game.imgUrl}}" alt="" class="img-responsive thumbnail" width="450px">
                                        <p>รายละเอียด : {{game.typeName}} </p>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">ชื่อเกมส์</label> {{name}}
                                        <input type="hidden" class="form-control" ng-model="game.id">
                                        <input type="text" class="form-control" placeholder="ชื่อเกมส์..." ng-model="game.name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="">เลือกประเภทเกมส์</label>
                                        <select class="form-control" placeholder="ประเภทเกมส์..." ng-model="game.typeId" required>
                                        <option disabled>เลือกประเภทเกมส์</option>
                                          <option ng-repeat="tp in Typegame" ng-value="tp.id">{{tp.typeName}}</option>
                                    </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="">LinkImagesGames ( ความยาวไม่เกิน 255 / <span class="text-danger">{{game.imgUrl.length}}</span> )</label>
                                        <textarea class="form-control" rows="3" placeholder="LinkImagesGames..." ng-model="game.imgUrl" ng-maxlength="255" required></textarea>
                                        </textarea>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-warning " ng-disabled="!creategame.$valid"><i class="glyphicon glyphicon-save"></i> บันทึกข้อมูล</button>
                                    <button type="reset" class="btn btn-danger">Reset</button>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3" ng-repeat="(index,modelApp) in ListGames | filter:searchText">
                    <div class="btn-group  " role="group" aria-label="..." style="z-index:1">
                        <a class="btn btn-info btn-sm dropdown-toggle text-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="glyphicon glyphicon-cog"></i> ตัวเลือก <span class="badge">{{index+1}}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a ng-click="editeGames(modelApp)"><i class="glyphicon glyphicon-pencil"></i> Edite</a>
                            </li>
                            <li>
                                <a ng-click="DeleteGames(modelApp.id)"> <i class="glyphicon glyphicon-trash"></i> Delete</a>
                            </li>
                        </ul>
                    </div>
                    <div class="thumbnail hvr-float-shadow" style="width:250px">
                        <a href="#">
                            <img ng-src="{{modelApp.imgUrl}}" alt="" class="img-responsive">
                            <div class="thumbnail-caption">
                                {{modelApp.name}}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
 </div>
 ```

1. ฟังก์ชัน controller เพิ่มเกมส์
```javascript
// controller.js
// Contoller ที่ชื่อว่า GamesController
    $scope.Show = function() {
        $scope.showCreate = true;
        $scope.message = "เพิ่มรายการเกมส์";
    };
    $scope.cacel = function() {
        $scope.showCreate = false;
    };
    $scope.AddGames = function() {
        GamesAppService.InsertGameModel($scope.game).then(function(res) {
            if (res.status) {
                $scope.GetDataGame();
                $scope.showCreate = false;
                $scope.ClearForm();
            }
        });
    };
```
##service model เพิ่มเกมส์ `(ใส่ใน model.js)`
```javascript

      facApp.InsertGameModel = function(game) {
        var data = JSON.stringify(game);
        var promise = $http.post('http://10.105.0.254:8080/game/insertGame', data)
            .then(function(res) {
                return res;
            }, function(res) {
                return res;
            });
        return promise;
    };
```

#ฟังก์ชัน controller แก้ไขเกมส์ `(ใส่ใน controller.js)`
```javascript
// ใส่ใน Contoller ที่ชื่อว่า GamesController
     $scope.editeGames = function(data) {
        $scope.message = "แก้ไขรายการเกมส์...";
        $scope.showCreate = false;
        $scope.updateG = true;
        GamesAppService.EGame(data.id).then(function(e) {
            $scope.game = e.data.result;
        });
    };
    $scope.UpdateGames = function() {
        $scope.updateG = false;
        //ตัด Data
        var dataGames = {
            'id': $scope.game.id,
            'name': $scope.game.name,
            'typeId': $scope.game.typeId,
            'imgUrl': $scope.game.imgUrl,
        };
        GamesAppService.UpdateGameModel(dataGames).then(function(e) {
            if (e.status) {
                $scope.ClearForm();
                $scope.GetDataGame();
            }
        });

    };
    $scope.ClearForm = function() {
        $scope.game = {};
};
```
##service model แก้ไขเกมส์
```javascript
// model.js
       facApp.EGame = function(id) {
        return $http.get("http://10.105.0.254:8080/game/findID/" + id);

    };
    facApp.UpdateGameModel = function(item) {
        var data = JSON.stringify(item);
        return $http({
            url: 'http://10.105.0.254:8080/game/editGame',
            method: "POST",
            data: data
        }).then(function(res) {
            return res.data;
        }, function(res) {
            return res;
        });

    };
```

1. ฟังก์ชัน controller ลบเกมส์
```javascript
// controller.js
$scope.DeleteGames = function(id) {
        var delCk = confirm("ต้องการจะลบเกมส์ ใช่หรือไม่ ?");
        if (delCk == true) {
            //  $scope.game.splice(index, 1);
            GamesAppService.DelectGameModel(id).then(function(res) {
                if (res.status) {
                    $scope.GetDataGame();
                }
            });
        } else {}
    };

```
2. ฟังก์ชัน service ลบเกมส์
```javascript
// model.js
facApp.DelectGameModel = function(id) {
        var del = $http.get("http://10.105.0.254:8080/game/deleteGame/" + id).then(function(res) {
            return res.data;
        });
        return del;
    };
```
