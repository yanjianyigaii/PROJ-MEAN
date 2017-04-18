(function() {
  'use strict';
  angular
  .module('projects')
  .run(menuConfig);

  menuConfig.$inject('menuService');
  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Projects',
      state: 'projects',
      type: 'dropdown',
      roles: ['*']
    });

    menuService.addSubMenuItem('topbar', 'projects', {
      title: 'List Projects',
      state: 'projects.list',
      roles: ['*']
    });
  }
}());
