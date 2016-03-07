// Write your package code here!
Template.registerHelper('getRecordSearchFilter', function (argument){
  return Session.get('userSearchFilter');
});


Template.registerHelper("getAvatar", function (argument){
  if (this && this.profile && this.profile.avatar) {
    return this.profile.avatar;
  } else {
    return "/packages/clinical_active-users/public/Default_User.png";
  }
});
