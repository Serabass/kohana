/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="./module.ts" />

module TL.Main {
    class MainController {
        public $inject:string[] = [
            '$scope'
        ];

        constructor($scope:ng.IScope) {

        }
    }

    getModule()
        .controller('MainController', MainController)
    ;

}