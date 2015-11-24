angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', function($scope,  $cordovaVibration) {
  var vm = this;
  vm.value = 5000;
  vm.vibrate = function(){
    setTimeout(function(){
    $cordovaVibration.vibrate(vm.value);
  }, vm.value1);
  }
})
