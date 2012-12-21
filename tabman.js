function TabManController($scope, $http) {
    // https://api.mongolab.com/api/1/databases/tabman/collections/tabs?apiKey=50c792bbe4b067a576ea9ea0
    // tabs.json?callback=JSON_CALLBACK
    $http.get('tabs.json')
        .success(function (data, status, headers, config) {
            $scope.allTabs = data;
        })
        .error(function (data, status) {
            $scope.error = true;
        });
}