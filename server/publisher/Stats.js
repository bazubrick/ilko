Meteor.publish('stats',function () {
    return Stats.find();

});