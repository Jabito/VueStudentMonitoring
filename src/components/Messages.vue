<template>
  <div>
    Messages
    <button v-on:click="sendNotif">SEND NOTIF</button>

    <div v-for="message in messages">
      {{message.title}}
    </div>
  </div>
</template>

<script>
  import { db } from '../services/Firebase'
  import firebase from 'firebase/firebase-app'
  import 'firebase/package'

  export default {
    data() {
      return {
        messages: {},
        newNotif:{
          message:'',
          title:''
        }
      }
    },
    created(){
      console.log(this.messages)
    },
    firebase: {
      messages: {
        source: db.ref('messages'),
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
      }
    },
    methods:{
      sendNotif: function() {
        this.newNotif.title = 'FromVue'
        this.newNotif.message = 'Message from Vue'
        db.ref('messages').push(this.newNotif)
      }
    }
  }
</script>

<style scoped>

</style>
