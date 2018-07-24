
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Tasks } from '../lib/collections/tasks'

Meteor.methods({
  'tasks.insert'(title) {
    check(title, String)
    Tasks.insert({
      title,
      createdAt: new Date()
    })
  },
  'tasks.update'(taskId, task) {
    check(taskId, String)
    check(task, String)
    Tasks.update(taskId, {
      $set: {
        _id: taskId,
        updatedAt: new Date(),
        title: task
      }
    })
  },
  'tasks.remove'(taskId) {
    check(taskId, String)
    Tasks.remove(taskId)
  }
})
