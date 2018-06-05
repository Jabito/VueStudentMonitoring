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
                <!--<div class="field">-->
                <!--<label class="checkbox">-->
                <!--<input type="checkbox">-->
                <!--Remember me-->
                <!--</label>-->
                <!--</div>-->
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
    methods: {
      login: function () {
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
            console.log(response)
            if(response.data.responseCode != 0){
              console.log('In')
              this.$router.push('/')
            }
          })
          .catch(e => {
            console.log(e)
          })
        console.log('clicked.')
      }
    }
  }
</script>

<style scoped>

</style>
