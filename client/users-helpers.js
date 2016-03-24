// Write your package code here!
Template.registerHelper('getRecordSearchFilter', function (argument) {
  return Session.get('userSearchFilter');
});


Template.registerHelper("getAvatar", function (argument) {
  if (this && this.profile && this.profile.avatar) {
    return this.profile.avatar;
  } else if (this && this.photo && this.photo[0] && this.photo[0].url) {
    return this.photo[0].url;
  } else if (this && this.photo && this.photo[0]) {
    return this.photo[0];
  } else {
    return "/packages/clinical_active-users/public/Default_User.png";
  }
});
