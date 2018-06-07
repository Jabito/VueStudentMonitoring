<template>
  <div>
    Send Firebase Notif
    <input type="text" placeholder="Title" v-model="newNotif.title"/>
    <input type="areatext" placeholder="Message" v-model="newNotif.message"/>
    <button v-on:click="sendNotif">SEND NOTIF</button>
    <button v-on:click="requestMessage">Request Permission</button>

    <div v-for="message in messages">
      {{message.title}}
    </div>
  </div>
</template>

<script>
  import {db, messaging} from '../../firebase-messaging-sw'
  import firebase from 'firebase/firebase-app'
  import 'firebase/package'

  export default {
    data() {
      return {
        messages: {},
        newNotif: {
          authorization: '',
          message: '',
          title: ''
        }
      }
    },
    created() {
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
    methods: {
      sendNotif: function () {
        db.ref('messages').push(this.newNotif)
        console.log(messaging)
        messaging.send(this.newNotif)
        navigator.serviceWorker.register('service-worker.js')
          .then((registration) => {
            const messaging = messaging.useServiceWorker(registration)
            console.log(messaging)
            messaging.requestPermission().then(function () {
              console.log('Notification permission granted.')
              messaging.getToken().then(function (currentToken) {
                if (currentToken) {
                  console.log(currentToken)
                }
              })
            })
          })
      },
      requestMessage: function () {
        messaging.requestPermission().then(function () {

          console.log('Notification permission granted.');
          // TODO(developer): Retrieve an Instance ID token for use with FCM.
          messaging.getToken().then(function(currentToken){
            if(currentToken){
              console.log('CurrentToken', currentToken)
            }else{
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
            }
          }).catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
          })
        }).catch(function (err) {
          console.log('Unable to get permission to notify.', err);
        });
      }
    }
  }
</script>

<style scoped>

</style>
