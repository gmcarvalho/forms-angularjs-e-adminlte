angular.module('app').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('settings', {
            url: '/settings',
            templateUrl: 'settings/tabs.html'
        })

        $urlRouterProvider.otherwise('settings');
    }
])