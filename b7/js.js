var  myapp = angular.module("myapp",[])
// myapp.controller("cha",$scope=>
// {
//     $scope.hello = "xin chào"
// })
// myapp.controller("con",$scope=>
// {
//     $scope.hello = "xin chào2"
//     $scope.$parent.hello = " chào "
// })



myapp.controller("cha", function($scope) {
$scope.students = [
    {
        fullname:"nguyễn văn a",
        birthday: "1-1-2024",
        Mark: "8.0"
    },
    {
        fullname:"bùi văn d",
        birthday: "1-5-2024",
        Mark: "8.5"
    }
    
]
//dl mẫu cho form
$scope.student = {
    fullname:"",
    birthday: "",
    Mark: ""
}
//sua
$scope.indexUpdate = undefined;
})
myapp.controller("form",function($scope){
$scope.save = function(){
    let student = angular.copy($scope.$parent.student)
    $scope.$parent.students.push(student)
}
$scope.cancel = function(){
    $scope.$parent.student = {
        fullname:"",
        birthday: "",
        Mark: ""
    }
}
})

myapp.controller("table",$scope =>{
$scope.saveIndex = function(index){
    $scope.$parent.indexUpdate = index
      let studentSave = angular.copy($scope.$parent.students[index])
      $scope.$parent.student = studentSave
}
})