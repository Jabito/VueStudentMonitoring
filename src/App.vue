<template>
  <div>
    <div v-if="this.authorized">
      <section class="hero is-link">
        <div class="hero-body is-paddingless">
          <div class="container is-marginless">
            <div class="columns">
              <div class="column is-one-fifth">
                <img src="../static/images/school_logo.png" width="150"/>
              </div>
              <div class="column is-three-fifths">
                <h1 class="title">
                  St. Mark's Institute Las Pinas
                </h1>
              </div>
              <div class="column is-one-fifth">
                <h1 class="title">
                  Logged in as
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="columns">
        <div class="column is-one-fifth">
          <nav class="navbar" role="navigation" aria-label="navigation">
            <div class="column">
              <router-link to="/dashboard" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Homepage</strong></p></router-link>
              <router-link to="/attendance" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Attendance Logs</strong></p></router-link>
              <router-link to="/messages" class="navbar-item button is-1"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Messages</strong></p></router-link>
              <router-link to="/addStudent" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Add Student</strong></p></router-link>
              <router-link to="/addParent" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Add Parent</strong></p></router-link>
              <router-link to="/addGuidance" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Add Guidance</strong></p></router-link>
              <router-link to="/addUser" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Add User</strong></p></router-link>
              <router-link to="/viewStudents" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>View Students</strong></p></router-link>
              <router-link to="/guidanceReport" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Post Guidance Report</strong></p></router-link>
              <router-link to="/viewSummary" class="navbar-item button"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>View Summary Report</strong></p></router-link>
              <button v-on:click="logout" class="navbar-item button is-fullwidth"><i class="fas fa-shield-alt"/>
                <p style="color: #44F;"><strong>Logout</strong></p></button>
            </div>
          </nav>
        </div>
        <div class="column is-four-fifths">
          <router-view/>
        </div>
      </div>
    </div>
    <div v-else>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <figure class="avatar">
                  <img src="../static/images/school_logo.png" width="250"/>
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="text" v-model="username" placeholder="Username" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" v-model="password" placeholder="Your Password">
                    </div>
                  </div>
                  <div style="color: red" v-if="this.error">
                    {{ this.errorMsg}}
                  </div>
                  <button class="navbar-item button is-block is-info is-large is-fullwidth" v-on:click="login">Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {db, messaging, auth} from '../firebase-messaging-sw'
  import router from './router'

  export default {
    name: 'App',
    created() {
      this.authorized = localStorage.getItem('authorized') == 'true'
    },
    beforeCreate() {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          // Cache user - an anonymously authenticated firebase.User account
          //  - https://firebase.google.com/docs/reference/js/firebase.User
          this.user = user
          // Bind this instance's 'messages' property to the 'messages/${uid}'
          // Firebase reference via vuefire.js' $bindAsArray() method
          // this.$bindAsArray('messages', db.ref('messages/' + user.uid))
        } else {
          auth.signInAnonymously().catch(console.error)
        }
        console.log('User', user)
      }).bind(this)
    },
    data() {
      return {
        user: {},
        username: '',
        password: '',
        error: false,
        errorMsg: ''
      };
    },
    methods: {
      login: function () {
        this.error = false
        axios.get(this.$endpoint + '/login', {
          params: {
            username: this.username,
            password: this.password
          },
          headers:
            {
              "content-type": "application/x-www-form-urlencoded"
            }
        })
          .then(response => {
            switch (response.data.responseCode) {
              case "OK":
                console.log('LOGIN', this)
                router.push('/dashboard')
                console.log(this)
                this.authorized = true
                localStorage.setItem('authorized', true)
                break;
              case 404:
                this.errorMsg = response.data.responseDesc
                this.error = true
                break
              case 201:
                this.errorMsg = response.data.responseDesc
                this.error = true
                break
              default:
                this.errorMsg = 'Cannot connect to server.'
                this.error = true
                break;
            }
          })
          .catch(e => {
            console.log(e)
          })
      },
      logout: function () {
        this.authorized = false
        localStorage.setItem('authorized', false)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
