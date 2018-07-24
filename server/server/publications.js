
import { Meteor } from 'meteor/meteor'
import { Tasks } from '../lib/collections/tasks'

Meteor.publish('tasks', function tasksPublication() {
  return Tasks.find()
})
Meteor.publish('userData', function() {
    var currentUser
    currentUser = this.userId
    if (currentUser) {
      return Meteor.users.find({
        _id: currentUser
      }, {
      fields: {
        'emails': 1
      }
    })
  } else {
    return this.ready()
  }
})
