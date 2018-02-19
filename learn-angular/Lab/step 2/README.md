# index.html
1.เรียกใช้ css และ js จาก โฟลเดอร์ assets
```html
<html lang="en"  ng-app="GameApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap-theme.min.css">
</head>
<body style="background:#e1e1e1 ">


    <script src="assets/js/angular-1.6.6/angular.js"></script>
    <script src="assets/js/angular-1.6.6/angular-route.js"></script>
   <script src="assets/css/bootstrap-3.3.7/js/jquery-3.2.1.min.js"></script>
    <script src="assets/css/bootstrap-3.3.7/js/bootstrap.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/controllers.js"></script>    
    <script src="assets/js/model.js"></script>
</body>
</html>
```
# index.html
2.การเรียกใช้งาน roter
```Html
//ใส่ในแท็ก body
 <div ng-view></div>

```
# ตัวอย่าง Code เต็มหน้า index.html
```Html
<!DOCTYPE html>
<html lang="en" ng-app="GameApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap-theme.min.css">

</head>
<body style="background:#e1e1e1 ">

    <br>
    <br>
    <div ng-view></div>

    <script src="assets/js/angular-1.6.6/angular.js"></script>
    <script src="assets/js/angular-1.6.6/angular-route.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/controllers.js"></script>
    <script src="assets/js/model.js"></script>
</body>
</html>
```
<h2>สร้าง โฟรเดอร์ views/layouts/header.html</h2>
3. กำหนด Path ruter ในหน้า header.html

```Html
<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav">
                <li>
                    <a href="../" class="navbar-brand">หน้าหลัก</a>
                </li>
                <li>
                    <a href="#!/games" class="navbar-brand">จัดการข้อมูลเกมส์</a>
                </li>
                <li>
                    <a href="#!/games-category" class="navbar-brand">จัดการข้อมูลประเภทเกมส์</a>
                </li>
            </ul>
            <div class="col-md-4 button-search">
            </div>
    </div>
    </nav>
    </div>
</header>
```

# เรียกใช้ hearder.html ในหน้า index.html โดยใช้ ' ng-include="" ' (ตัวอย่างการเรียกใช้      <div ng-include="'./views/layouts/header.html'"></div> )
3. ดู codeเต็ม

```Html
<!DOCTYPE html>
<html lang="en" ng-app="GameApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-3.3.7/css/bootstrap-theme.min.css">
</head>
<body style="background:#e1e1e1 ">
    <div ng-include="'./views/layouts/header.html'"></div>
    <br>
    <br>
    <div ng-view></div>
    <script src="assets/js/angular-1.6.6/angular.js"></script>
    <script src="assets/js/angular-1.6.6/angular-route.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/controllers.js"></script>
    <script src="assets/js/model.js"></script>
</body>
</html>
```

4. show game

```Html
<div class="container " ng-controller="GamesController">
    <div class="col-md-12" style="margin-top:100px;">
        <div class="col-md-9">
            <h1 class="page-header">PC game</h1>
            <div class="row">
                <div class="col-md-4" ng-repeat="(index,model) in ListGames | filter:searchType">
                    <div class="thumbnail hvr-float-shadow" style="width:100%">
                        <a href="#">
                            <img ng-src="{{model.imgUrl}}" alt="" class="img-responsive">
                            <div class="thumbnail-caption">
                                {{modelApp.name}}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <h1 class="page-header">หมวดหมู่</h1>
            <div class="sidebar">
                <ul>
                    <li class="cat-item" ng-repeat="modelTp in Typegame">
                        <a href="#" ng-model="searchType.modelTp.id"><i class="glyphicon glyphicon-arrow-right"></i> {{modelTp.typeName}}</a>
                    </li>
                </ul>
                <div class="col-md-12" style="padding:0px;">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcomsci.bru%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=200043800554026" width="340"
                        height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
```