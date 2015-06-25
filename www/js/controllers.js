angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('LoadingCtrl', function($scope, $timeout, $ionicLoading) {
  //Action tombol ng-click="showLoading()" di folder templates tab-dash.html
  $scope.showLoading = function() {
    // Setup the loader
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    
    //Sesudah loading
    $timeout(function () {
      //Loading di sembunyikan
      $ionicLoading.hide();
      //Buat di looping coeg
      $scope.baturans = [
        {name: 'Ferdhika', deskripsi : 'Ganteng'}, 
        {name: 'Ikbal', deskripsi : 'Tamvan'}, 
        {name: 'Coeg', deskripsi : 'Maho'}
      ];
    }, 2000);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
