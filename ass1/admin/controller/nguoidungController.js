window.nguoidungController = function($scope){

    app.controller("cha", $scope => {
        $scope.dienthoais = [{
          stt: "1",
          ten: "iphone 16",
          gia: "100000000",
          mota: "vượt thời đại ",
      
      
        }]
        $scope.dienthoai = {
          stt: "1",
          ten: "",
          gia: "",
          mota: ""
        }
        $scope.indexUpdete = undefined
      })
      app.controller("form", $scope => {
      
        $scope.luu = function () {
          if ($scope.$parent.indexUpdete == undefined) {
            let dienthoai = angular.copy($scope.$parent.dienthoai)
            $scope.dienthoais.push(dienthoai)
            $scope.xoa()
          } else {
            let dienthoai = angular.copy($scope.$parent.dienthoai)
            let index = $scope.$parent.indexUpdete
            $scope.$parent.dienthoais.splice(index, 1, dienthoai)
            $scope.xoa()
            $scope.$parent.indexUpdete = undefined
          }
      
        }
        $scope.xoa = function () {
          $scope.$parent.dienthoai = {
            stt: "1",
            ten: "",
            gia: "",
            mota: ""
          }
          $scope.$parent.indexUpdete = undefined
      
        }
      })
      app.controller("table", $scope => {
        $scope.suaIndex = function (index) {
          $scope.$parent.indexUpdete = index
          let dienthoai = angular.copy($scope.$parent.dienthoais[index])
          $scope.$parent.dienthoai = dienthoai
        }
      
        $scope.xoaIndex = function (index) {
          let check = confirm("có chắc là muốn xóa không :<")
          if (check) {
            $scope.$parent.dienthoais.splice(index, 1)
          }
        }
      })

  
}


