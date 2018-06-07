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
            <input class="input" v-model="citizenship" type="text" placeholder="Citizenship">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input class="input" v-model="address" type="text" placeholder="Address">
          </div>
        </div>
        <div class="field">
          <label class="label">Contact No</label>
          <div class="control">
            <input class="input" v-model="contact" type="text" placeholder="Contact No">
          </div>
        </div>

      </div>
      <div class="column is-half">
        <div class="field">
          <b-field label="Birth Date">
            <b-datepicker
              v-model="bday"
              placeholder="Click to select..."
              icon="calendar-today">
            </b-datepicker>
          </b-field>
        </div>
        <div class="field">
          <label class="label">Gender</label>
          <div class="control">
            Male <input type="radio" value="1" v-model="gender" name="gender"/>
            Female <input type="radio" value="0" v-model="gender" name="gender"/>
          </div>
        </div>
        <b-field label="Grade Level">
          <b-select v-model="gradeLevelId" placeholder="Select Grade Level"
                    required>
            <option v-for="gradeLvl in this.gradeLvls" value="gradeLvl.id">{{gradeLvl.gradeLevel}}</option>
          </b-select>
        </b-field>
        <b-field label="Section">
          <b-select v-model="sectionId" placeholder="Select Section" required>
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
  import axios from 'axios'

  export default {
    name: "AddStudent",
    data() {
      return {
        firstName: '',
        lastName: '',
        middleInitial: '',
        gradeLevelId: '',
        sectionId: '',
        gender: '',
        section: '',
        citizenship: '',
        bday: new Date(),
        address: '',
        contact: '',
        rfid: '',
        gradeLvls: []
      }
    },
    created() {
      this.getGradeLvls()
    },
    methods: {
      saveStudent: function () {
        let object = {
          firstName: this.firstName,
          lastNAme: this.lastNAme,
          middleName: this.middleInitial,
          gradeLevelId: this.gradeLevelId,
          sectionId: this.sectionId,
          gender: this.gender,
          citizenship: this.citizenship,
          address: this.address,
          contactNo: this.contactNo,
          rfid: this.rfid,
          appUsername: 'admin1'
        }
        JSON.stringify(object)
        axios.post(this.$endpoint + '/addStudent',  object)
      },
      getGradeLvls: function () {
        axios.get(this.$endpoint + '/getGradeLevels', {})
          .then(response => {
            console.log('GradeLvls', response.data.gradeLvls)
            this.gradeLvls = response.data.gradeLvls
          }).catch(e => {
          this.$toast.open({
            duration: 3000,
            message: `Server Error. Please be patient and try again.`,
            type: 'is-danger'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
