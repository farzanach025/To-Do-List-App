'use strict';


//We have to define our application first
angular.module("myApp.view1", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

  .controller("View1Ctrl", ['$scope',
    function($scope) {
      $scope.taskList = [];
	  $scope.taskLists={};
	  $scope.onloadArray =[];
	  
      $scope.addTask = function(task) {
		  console.log("inside add task");
		  $scope.taskList.push({
          done: false,
          task: task
        });
		console.log(" $scope.taskList", $scope.taskList);
		document.getElementById("myText").value = "";
		localStorage.setItem("quentinTarantino", JSON.stringify($scope.taskList));
		console.log("localStorage",localStorage);
      };
	  
	  $scope.deleteTask = function(task) {
        console.log("inside delete function",task.task);
		for(var i=0;i<$scope.taskList.length;i++){
			if(task.task==$scope.taskList[i].task){
				$scope.taskList.splice(i,1);
            localStorage.setItem("quentinTarantino", JSON.stringify($scope.taskList));
				i--;
			}
		}
       console.log("new array",$scope.taskList);
      };
	  
	  $scope.deleteTaskOnload = function(task) {
        console.log("inside deleteTaskOnload function",task.task);
		for(var i=0;i<$scope.onloadArray.length;i++){
			if(task.task==$scope.onloadArray[i].task){
				$scope.onloadArray.splice(i,1);
            localStorage.setItem("quentinTarantino", JSON.stringify($scope.onloadArray));
				i--;
			}
		}
       console.log("new array",$scope.taskList);
      };
	    $scope.load = function() {
        console.log("inside load function");
		//document.getElementById("tasklistsid").style.display = "block";
		//document.getElementById("tasklistid").style.display = "none";
        //localStorage.setItem("quentinTarantino1", JSON.stringify($scope.taskList));
		var retrievedData = localStorage.getItem("quentinTarantino");
		console.log("retrievedData : ", retrievedData);
		$scope.onloadArray= JSON.parse(retrievedData);
		console.log("onloadArray", $scope.onloadArray);
  }
    }
  ]);