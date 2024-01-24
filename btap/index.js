// Yêu cầu: Sử dụng AngularJS để thực hiện CRUD
// 1. Tạo 3 controller parent, form và table
// 2. Lưu trữ Dữ liệu danh sách nhân viên
// 3. Thực hiện các chức năng Thêm, Sửa, Xóa danh sách nhân viên, chức năng Xóa có confirm
// 4. Dựng Hàm tính thưởng biết 
//          + Nhân viên làm dưới 150h/ 1 tháng => Không có thưởng
//          + Từ 150h đến 250h/ 1 tháng => thưởng 3 triệu
//          + Trên 250h/1 tháng => thưởng 5 triệu
var thuong = "không có";
// function tinh(GioLamViec){
//     if($scope.nhanvien.GioLamViec >=150){
//     thuong = "3.000.000";
// }else if($scope.nhanvien.GioLamViec >=250){
//     thuong = "5.000.000"
// }
// } 



var myapp = angular.module("MyApp", []);
myapp.controller("cha", function ($scope) {
    $scope.nhanviens = [

        {
            HoVaTen: "tran anh ",
            que: "hà nam",
            GioLamViec: "240",
            Thuong: thuong,
        }

    ]

    $scope.nhanvien = {
        HoVaTen: "",
        que: "",
        GioLamViec: "",
        Thuong: "",
    }
    $scope.indexUpdate = undefined;

})
myapp.controller("form", function ($scope) {
    $scope.luu = function () {
        let nhanviendz = angular.copy($scope.$parent.nhanvien);
        $scope.$parent.nhanviens.push(nhanviendz);
    }
    $scope.huy = function () {
        $scope.$parent.nhanvien = {
            HoVaTen: "",
            que: "",
            GioLamViec: "",
            thuong: "",
        }
    }
})
myapp.controller("table", function ($scope) {
    $scope.saveIndex = function (index) {
        if($scope.$parent.indexUpdate == undefined){
            let nhanvienSave = angular.copy($scope.$parent.nhanvien)
            $scope.$parent.nhanviens.push(nhanvienSave)
            $scope.cancel();
        }else{

        
        $scope.$parent.indexUpdate = index
        let nhanvienSave = angular.copy($scope.$parent.nhanvien)
        $scope.$parent.nhanvien = nhanvienSave
        $scope.$parent.nhanviens.splice(index,1,nhanvienSave)
        $scope.cancel();
        }
    }
})


