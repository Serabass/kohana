/// <reference path="../../../../typings/tsd.d.ts" />

module TL.Main {
    export var moduleName = 'tl.main';

    angular.module(moduleName, [
        'ngCookies',
        'ngRoute'
    ]);

    export var getModule =
        ():ng.IModule => angular.module(moduleName);

    getModule()
        .config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider:angular.route.IRouteProvider, $locationProvider:ng.ILocationProvider) {

            $routeProvider.when('/', {
                controller: 'MainController',
                template: '{{ 1 + 1 }}'
            })

            .otherwise({
                redirectTo: '/'
            })

        }])

        .run(['$rootScope', function ($rootScope:ng.IRootScopeService) {

        }]);
}