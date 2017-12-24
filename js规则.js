var scope = (function () {
    $scope = {
        a: 1,
        init: function () {
            $scope.a = 2
        },
    }
    $scope.init()
    return $scope
}())