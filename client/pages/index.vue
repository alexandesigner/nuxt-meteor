<template>
  <div>
    <h1>Welcome</h1>
    <nuxt-link to="/tasks">Go tasks list</nuxt-link>
    <div class="profile" v-if="loggedIn">
      <strong>{{ this.email }}</strong>
      <button type="button" @click="logout">Logout</button>
    </div>
    <hr />
    <div class="register">
      <h3>Register</h3>
      <div>
        <input placeholder="Email" type="text" v-model="registerForm.email" required />
        <input placeholder="Password" type="password" v-model="registerForm.password" required />
        <button type="button" @click="register">Register</button>
      </div>
    </div>
    <div class="login">
      <h3>Login</h3>
      <div>
        <input placeholder="Email" type="text" v-model="loginForm.email" required />
        <input placeholder="Password" type="text" v-model="loginForm.password" required />
        <button type="button" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Meteor } from 'meteor/meteor'
  import { Accounts } from 'meteor/accounts-base'
  import { Tracker } from 'meteor/tracker'
  export default {
    data () {
      return {
        userData: [],
        registerLoad: false,
        loginLoad: false,
        loggedIn: false,
        loginForm: {
          email: '',
          password: ''
        },
        registerForm: {
          email: '',
          password: ''
        },
        email: ''
      }
    },
    created () {
      Tracker.autorun(() => {
        this.userEmail()
        this.loginStatus()
      })
    },
    methods: {
      userEmail () {
        Tracker.autorun(() => {
          if (Meteor.userId() !== null || Meteor.user() !== null) {
            const userEmail = Meteor.users.find({_id: Meteor.userId()}, {fields: {emails: 1}})
              .map((item) => {
                return item.emails[0].address
              })
            this.email = userEmail[0]
          }
        })
      },
      loginStatus () {
        if (Meteor.userId() !== null || Meteor.user() !== null) this.loggedIn = true
      },
      logout () {
        Meteor.logout()
        this.loggedIn = false
      },
      login () {
        this.loginLoad = true
        Meteor.loginWithPassword(this.loginForm.email, this.loginForm.password, (err) => {
          if (err) this.loginLoad = false
          this.loginLoad = false
          this.loginForm.email = ''
          this.loginForm.password = ''
        })
      },
      register () {
        this.registerLoad = true
        console.log(this.registerForm.email)
        console.log(this.registerForm.password)
        Accounts.createUser({
          createdAt: new Date(),
          email: this.registerForm.email,
          password: this.registerForm.password
        }, (err, res) => {
          this.registerLoad = false
          if (err) {
          }
          else {
            this.registerLoad = false
            this.registerForm.email = ''
            this.registerForm.password = ''
          }
        })
      }
    }
  }
</script>

<style>
hr {
  margin: 30px 0;
}
input {
  border: 1px solid #e5e5e5;
  padding: 5px;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;
  float: left;
  margin-right: 10px;
}
button {
  height: 32px;
  background: #222;
  color: #fff;
  border-radius: 4px;
  border: 0 none;
  float: left;
  cursor: pointer;
  font-weight: bold;
  padding: 0 15px;
}
h3 {
  display: block;
}
.register, .login {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.profile {
  display: flex;
  margin-top: 20px;
}
.profile strong {
  float: left;
  margin-right: 15px;
}
</style>
