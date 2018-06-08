<template>
  <div>
    <div v-if="this.authorized">
      <section class="hero is-link">
        <div style="background-color: #122b40;"class="hero-body is-paddingless">
          <div class="container is-marginless">
            <div class="columns level">
              <div class="column is-2 is-gapless">
                <img src="../static/images/school_logo.png"  height="100px" width="100px" style="padding: -10px" class = "level-item"/>


                </div>
              <div class="column is-3 is-gapless level-item">
                <h2>
                    St. Mark's Institute Las Pinas
                 </h2>
              </div>
              <div class="column is-2
                                is-offset-7">
                <h2>
                  Logged in as
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>




<section class="main-content columns is-fullheight">

  <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile menu" >

               <ul class="menu-list">
                 <li> <router-link to="/dashboard">Homepage</router-link></li>
                 <li> <router-link to="/attendance">Attendance Logs</router-link></li>
                 <li> <router-link to="/attendance">Messages</router-link></li>
                 <li> <router-link to="/addStudent">Add Student</router-link></li>
                 <li> <router-link to="/addGuidance">Add Guidance</router-link></li>
                 <li> <router-link to="/addParent">Add Parent</router-link></li>
                 <li> <router-link to="/addUser">Add User</router-link></li>
                 <li> <router-link to="/viewStudents">View Students</router-link></li>
                 <li> <router-link to="/guidanceReport">Post Guidance Report</router-link></li>
                 <li> <router-link to="/viewSummary">View Summary Report</router-link></li>
                 <li> <router-link to="/logout">Logout</router-link></li>
               </ul>

  </aside>

  <div class="container column is-10">
    <div class="section">
      <router-view/>
    </div>
  </div>
</section>






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
