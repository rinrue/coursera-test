(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.lunchList = "";
		$scope.message = "";

		$scope.checkIfTooMuch = function () {
			if ($scope.lunchList == "") {
				$scope.message = "Enter something please!"
			}
			else {
				var lunchArray = $scope.lunchList.split(",");
				if (lunchArray.length > 3) {
					$scope.message = "Too much!";
				}
				else {
					$scope.message = "Enjoy!";
				}
			}
		};
	}
})();