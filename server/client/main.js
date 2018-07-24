import { Template } from 'meteor/templating'
import { Tasks } from '../lib/collections/tasks'

import './main.html'

Template.tasksList.onCreated(function tasksListOnCreated(){
  Meteor.subscribe('tasks')
})

Template.tasksList.helpers({
  tasks: function () {
    return Tasks.find({})
  }
})

Template.tasksList.events({
  'click #add-task': (event, instance) => {
    event.preventDefault()
    const randomId = Math.floor((Math.random() * 10) + 1)
    Meteor.call('tasks.insert', `Task ${randomId}`)
  }
})
