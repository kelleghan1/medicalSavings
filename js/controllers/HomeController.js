thisApp
.controller('HomeController', [
  '$state',
  '$scope',
  function(
    $state,
    $scope
  ){

    $scope.userIcons = [];
    $scope.selectedMembers = null;
    $scope.members = [];
    $scope.services = [
      { title: "Oral Exam", savings: 100 },
      { title: "Cleaning", savings: 100 },
      { title: "Filling", savings: 100 },
      { title: "X-Rays", savings: 100 },
      { title: "Root Canal", savings: 100 },
      { title: "Crown", savings: 100 },
      { title: "Upper Denture", savings: 100 },
      { title: "Braces", savings: 100 }
    ]

    for (var i = 1; i <= 10; i++) {
      $scope.userIcons.push({iconIndex: i })
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

      console.log($scope.members);

    }

  }
])
