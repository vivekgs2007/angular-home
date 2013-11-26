var HelloCtrl = function ($scope) {
  $scope.name = 'World from controller';
  $scope.getName = function() {
  return $scope.name;
  };
}

var WorldCtrl = function ($scope) {
  $scope.population = 7000;
  $scope.countries = [
    {name: 'France', population: 63.1},
    {name: 'United Kingdom', population: 61.8},
  ];

	$scope.worldsPercentage = function (countryPopulation) {
		return (countryPopulation / $scope.population)*100;
	}
};

var TextAreaWithLimitCtrl = function ($scope) {
	$scope.remaining = function () {
		return MAX_LEN - $scope.message.length;
	};
	$scope.shouldWarn = function () {
		return $scope.remaining() < WARN_THRESHOLD;
	};
};