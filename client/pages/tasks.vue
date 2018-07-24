<template>
  <div>
    <h1>Tasks</h1>
    <p>A Task List from the Meteor Server</p>
    <div v-for="task in tasks" :key="task.id">
      <strong>{{ task.title }}</strong>
    </div>
  </div>
</template>

<script>
  import { Meteor } from 'meteor/meteor'
  import { Tracker } from 'meteor/tracker'
  import { Tasks } from 'server/lib/collections/tasks'
  export default {
    data () {
      return {
        tasks: []
      }
    },
    created () {
      if (process.browser) {
        Meteor.subscribe('tasks')
        Tracker.autorun(() => {
          this.tasks = Tasks.find({}, {sort: { createdAt: -1 }})
            .map((item) => {
              return {
                _id: item._id,
                title: item.title,
                editing: false
              }
            })
        })
      }
    }
  }
</script>
