<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box">
              <figure class="avatar">
                <img src="../../static/images/school_logo.png" width="250"/>
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
                <div v-if="this.errorName">
                  <p>Username not found.</p>
                </div>
                <div v-if="this.errorPass">
                  <p>Password is invalid. Please try again.</p>
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
</template>

<script>
  import router from '../router'
  import axios from 'axios'
  import {endpoint} from '../main'

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        errorName: false,
        errorPass: false,
        authorized: false
      };
    },
    methods: {
      login: function () {
        this.clearErrors()
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
                console.log(this.$parent)
                this.$parent.$parent.$authorized = true
                // router.go('/dashboard')
                break;
              case 404:
                this.errorName = true
                break
              case 201:
                this.errorPass = true
                break
            }
          })
          .catch(e => {
            console.log(e)
          })
      },
      clearErrors: function(){
        this.errorName = false
        this.errorPass = false
      }
    }
  }
</script>

<style scoped>
  #login {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
