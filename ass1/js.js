var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "view/danhsachsp.html"
  })
  .when("/danhsanhsp", {
    templateUrl : "view/chitietsp.html"
  })
 
  .otherwise({
    template : "<h1>lỗi 404</h1><p>không tồn tại</p>"

    
  });
});