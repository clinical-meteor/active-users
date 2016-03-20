Session.setDefault( 'userSearchFilter', '' );
Session.setDefault( 'tableLimit', 20 );
Session.setDefault( 'paginationCount', 1 );
Session.setDefault( 'selectedPagination', 0 );
Session.setDefault( 'skipCount', 0 );



//------------------------------------------------------------------------------
// ROUTING

Router.map( function () {
  this.route( 'usersListPage', {
    path: '/list/users/',
    template: 'usersListPage',
    data: function () {
      return Meteor.users.find();
    }
  });
});



//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.usersListPage.events( {
  'click .addRecordIcon': function () {
    Router.go( '/insert/user' );
  },
  'click .userItem': function () {
    Router.go( '/view/user/' + this._id );
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #userSearchInput': function () {
    Session.set( 'userSearchFilter', $( '#userSearchInput' ).val() );
    //Session.set('userSearchFilter', $('#librarySearchInput').val());
  }
});

Template.userSearchInput.events({
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #userSearchInput': function () {
    Session.set( 'userSearchFilter', $( '#userSearchInput' ).val() );
    //Session.set('userSearchFilter', $('#librarySearchInput').val());
  }
});
//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

// Template.usersListPage.rendered = function () {
//   console.log( 'trying to update layout...' );
//
//   //Template.appLayout.delayedLayout( 20 );
// };


Template.usersListPage.helpers( {
  getHumanNameText: function(){
    if (this && this.profile && this.profile.name && this.profile.name.text) {
      return this.profile.name.text
    } else if (this && this.profile && this.profile.fullName) {
      return this.profile.fullName;
    } else {
      return "---";
    }
  },
  getCreatedAt: function(){
    return moment(this.createdAt).format("MMM DD, YYYY");
  },
  hasNoContent: function () {
    if ( Users.find().count() === 0 ) {
      return true;
    } else {
      return false;
    }
  },
  usersList: function () {
    Session.set( 'receivedData', new Date() );

    return Meteor.users.find( {
      'profile.fullName': {
        $regex: Session.get( 'userSearchFilter' ),
        $options: 'i'
      }
    } );
  }
} );
