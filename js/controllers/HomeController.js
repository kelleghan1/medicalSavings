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
      { tag: "oe", title: "Oral Exam", savings: 100, selected: true },
      { tag: "cl", title: "Cleaning", savings: 100, selected: true },
      { tag: "fi", title: "Filling", savings: 100, selected: false },
      { tag: "xr", title: "X-Rays", savings: 100, selected: false },
      { tag: "rc", title: "Root Canal", savings: 100, selected: false },
      { tag: "cr", title: "Crown", savings: 100, selected: false },
      { tag: "ud", title: "Upper Denture", savings: 100, selected: false },
      { tag: "br", title: "Braces", savings: 100, selected: false }
    ]

    for (var i = 1; i <= 10; i++) {
      $scope.userIcons.push({iconIndex: i })
    }

    $scope.addVal = function($event, member, val){
      var checkbox = $event.target;

      if (checkbox.checked) {

        for (var i = 0; i < $scope.members.length; i++) {
          if ($scope.members[i].id == member) {
            $scope.members[i].value += val
          }
        }

      }else{

        for (var i = 0; i < $scope.members.length; i++) {
          if ($scope.members[i].id == member) {
            $scope.members[i].value -= val
          }
        }

      }
    }

    // $scope.checkAll = function (service) {
    //
    //   for (var i = 0; i < $scope.members; i++) {
    //     if ($scope.members[i].title == service) {
    //       $scope.services[i].selected = true
    //     }
    //   }
    //
    // };

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

  }
])
