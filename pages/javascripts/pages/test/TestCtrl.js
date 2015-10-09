'use strict';

angular.module('exampleApp').controller('TestCtrl', ['$scope', function($scope) {

	$scope.testmodel = [];
	$scope.testdata = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.dropdownSettings = {displayProp: 'id'};

	function onDropdownBlur(msg){
		console.log('msg', msg);
	}

	$scope.dropdownEvents = {
		onClose: function(){
			onDropdownBlur('testing event');
		},
	}

}]);
