<template>
  <div>
    <h1 class="is-block title">Add Student</h1>
    <div class="columns">
      <div class="column is-half">
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input class="input" v-model="firstName" type="text" placeholder="First Name">
          </div>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input class="input" v-model="lastName" type="text" placeholder="Last Name">
          </div>
        </div>
        <div class="field">
          <label class="label">Middle Initial</label>
          <div class="control">
            <input class="input" v-model="middleInitial" type="text" placeholder="Middle Initial">
          </div>
        </div>
        <div class="field">
          <label class="label">Citizenship</label>
          <div class="control">
            <input class="input" type="text" placeholder="Citizenship">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input class="input" type="text" placeholder="Address">
          </div>
        </div>
        <div class="field">
          <label class="label">Contact No</label>
          <div class="control">
            <input class="input" type="text" placeholder="Contact No">
          </div>
        </div>

      </div>
      <div class="column is-half">
        <div class="field">
          <b-field label="Birth Date">
            <b-datepicker
              placeholder="Click to select..."
              icon="calendar-today">
            </b-datepicker>
          </b-field>
        </div>
        <div class="field">
          <label class="label">Gender</label>
          <div class="control">
            Male <input type="radio" v-model="gender" name="gender"/>
            Female <input type="radio" v-model="gender" name="gender"/>
          </div>
        </div>
        <b-field label="Grade Level">
          <b-select v-model="gradeLevel" placeholder="Select Grade Level" required>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </b-field>
        <b-field label="Section">
          <b-select v-model="section" placeholder="Select Section" required>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </b-field>
        <div class="field">
          <label class="label">RFID Number</label>
          <div class="control">
            <input class="input" v-model="rfid" type="text" placeholder="Tap Card">
          </div>
        </div>
      </div>
    </div>
    <button v-on:click="saveStudent">Add Student</button>
  </div>
</template>

<script>
  export default {
    name: "AddStudent",
    data(){
      return {
        firstName: '',
        lastName: '',
        middleInitial: '',
        gradeLevel: '',
        gender: '',
        section: '',
        rfid: ''
      }
    },
    methods: {
      saveStudent: function() {
        console.log(this.firstName + ' ' + this.lastName);
        console.log(this.data())
      }
    }
  }
</script>

<style scoped>

</style>
