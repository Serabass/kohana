/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="./module.ts" />

module TL.Main {

    interface IWish {
        id:number;
        text:string;
    }

    interface x extends ng.IWindowService {
        user:any;
    }

    interface IMainScope extends ng.IScope {
        wishes:IWish[];
        auth:boolean;
    }

    class MainController {
        public $inject:string[] = [
            '$scope',
            '$http',
            '$interval',
            '$window'
        ];

        constructor(public $scope:IMainScope, public $http:ng.IHttpService, public $interval:ng.IIntervalService, public $window:x) {
            $scope.wishes = [];

            $interval(() => {
                $scope.auth = !!$window.user;
            }, 100);

            $http.get<IWish[]>('/api_wish').then((res) => {
                $scope.wishes = res.data;
            });
        }
    }

    getModule()
        .controller('MainController', MainController)
    ;

}