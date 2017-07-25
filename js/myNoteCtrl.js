app.controller("myNoteCtrl", function($scope) {
    $scope.messages=[]
    $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
    };
    $scope.save = function() {
        if (!$scope.message) { 
            alert("Oops! it seems like you have not entered any text in the box. Kindly Enter your Message"); 
            return;
        }
        else{
            alert("Great! Your text has been saved as json object!");            
            $scope.messages.push($scope.message);
            $scope.message="";
        }
    };
});