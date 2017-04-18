(function (){
    'use strict';

    angular
    .module('articles.routes')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider){
        $stateProvider
        .state('projects', {
            abstract: true,
            url: '/projects',
            template: '<ui-view/>'
        })
        .state('project.list',{
            
        })
    }
}());