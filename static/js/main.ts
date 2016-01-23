/// <reference path="../../typings/tsd.d.ts" />

module TL {
    angular.module('tl', [
        'ngCookies',
        'ngRoute',
    ]);

    function getModule():ng.IModule {
        return angular.module('tl');
    }

    getModule()
        .config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider:ng.IRootScopeService, $locationProvider:ng.ILocationProvider) {

        }])

        .run(['$rootScope', function ($rootScope:ng.IRootScopeService) {
            console.log('runned!');
        }])
}

console.log(123);