

// Users = new Mongo.Collection("users");
Users = Meteor.users;
Users.allow({
  insert: function (){
    return true;
  },
  update: function (){
    return true;
  },
  remove: function (){
    return true;
  }
});



if (Meteor.isClient){
  Meteor.subscribe("users");
}

if (Meteor.isServer){
  Meteor.publish("users", function (argument){
    return Users.find();
  });
}
