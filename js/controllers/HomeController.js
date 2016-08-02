thisApp
.controller('HomeController', [
  '$state',
  '$scope',
  function(
    $state,
    $scope
  ){

    $scope.totalSavings = 0;
    $scope.userIcons = [];
    $scope.selectedMembers = null;
    $scope.members = [];
    $scope.services = [
      { title: "Oral Exam", savings: 100, selected: true },
      { title: "Cleaning", savings: 50, selected: true },
      { title: "Filling", savings: 200, selected: false },
      { title: "X-Rays", savings: 150, selected: false },
      { title: "Root Canal", savings: 175, selected: false },
      { title: "Crown", savings: 225, selected: true },
      { title: "Upper Denture", savings: 275, selected: false },
      { title: "Braces", savings: 75, selected: false }
    ]

    for (var i = 1; i <= 10; i++) {
      $scope.userIcons.push({iconIndex: i })
    }


    $scope.getTotals = function(member){
      var result = 0;
      var currentNode = angular.element( document.querySelector('#memberRow' + member))[0].childNodes

      for (var i = 0; i < currentNode.length; i++) {
        if(currentNode[i].childNodes){
          for (var j = 0; j < currentNode[i].childNodes.length; j++) {

            if (currentNode[i].childNodes[j].checked) {
              result += parseInt(currentNode[i].childNodes[j].value)
            }

          }
        }
      }
      $scope.members[member-1].value = result;
      $scope.getTotalSavings();
      return result

    }

    $scope.iconClick = function(index){
      $scope.members = [];
      $scope.selectedMembers = index;

      for (var i = 1; i <= index; i++) {
        $scope.members.push({
          id: i,
          value: 0
        })
      }

    }

    $scope.addMember = function(){
      $scope.members.push({
        id: $scope.selectedMembers + 1,
        value: 0
      });

      $scope.selectedMembers ++;

    }

    $scope.getTotalSavings = function(){
      var total = 0;

      for (var i = 0; i < $scope.members.length; i++) {
        total += $scope.members[i].value
      }

      $scope.totalSavings = total;
    }

    $scope.getMovie = function() {
      return Math.floor($scope.totalSavings/10)
    }

    $scope.submitForm = function(){

      var postObj = {
        members: $scope.members,
        total: $scope.totalSavings
      }

      //  Example of post request with request object

      //  $http.post('https://example.com', postObj)
      //  .then(function(res){
      //  return res
      //  }

      // Service call here

    }

  }
])
