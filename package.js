Package.describe({
  name:'clinical:active-users',
  version: '0.1.2',
  summary: 'ActiveUsers package with user tables, thumbnail page, basic profiles, etc.',
  git: 'https://github.com/clinical-meteor/clinical-active-users',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('grove:less@0.1.1');

  api.use('clinical:router@2.0.17');
  api.use('clinical:active-layout@0.7.16');
  api.use('clinical:glass-ui@1.3.9');

  api.addFiles('users-core.js', 'client');

  api.addFiles('client/components/userUpsertPage/userUpsertPage.html', ['client']);
  api.addFiles('client/components/userUpsertPage/userUpsertPage.js', ['client']);
  api.addFiles('client/components/userUpsertPage/userUpsertPage.less', ['client']);

  api.addFiles('client/components/usersTablePage/usersTablePage.html', ['client']);
  api.addFiles('client/components/usersTablePage/usersTablePage.js', ['client']);
  api.addFiles('client/components/usersTablePage/usersTablePage.less', ['client']);
  api.addFiles('client/components/usersTablePage/jquery.tablesorter.js', ['client']);

  api.addFiles('client/components/userPreviewPage/userPreviewPage.html', ['client']);
  api.addFiles('client/components/userPreviewPage/userPreviewPage.js', ['client']);
  api.addFiles('client/components/userPreviewPage/userPreviewPage.less', ['client']);

  api.addFiles('client/components/userImageGridPage/userImageGridPage.html', ['client']);
  api.addFiles('client/components/userImageGridPage/userImageGridPage.js', ['client']);
  api.addFiles('client/components/userImageGridPage/userImageGridPage.less', ['client']);

  api.addFiles('client/components/userEditPage/userEditPage.html', ['client']);
  api.addFiles('client/components/userEditPage/userEditPage.js', ['client']);
  api.addFiles('client/components/userEditPage/userEditPage.less', ['client']);


  api.addFiles('client/components/usersListPage/usersListPage.html', ['client']);
  api.addFiles('client/components/usersListPage/usersListPage.js', ['client']);
  api.addFiles('client/components/usersListPage/usersListPage.less', ['client']);

  api.addFiles('server/methods.js', 'server');

  api.export('userUpsertPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('clinical:active-users');
});
