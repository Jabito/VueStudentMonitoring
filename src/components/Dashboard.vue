<template>
  <div>
    <div id="container">
      <div class="container-fluid" style="background-color: #122b40;">
        <div class="row" style="  background-color: #122b40;">
          <div class="">
            <!--/*/ <th:block th:include="fragments/header :: header"></th:block> /*/-->
          </div>
        </div>
      </div>

      <!-- ETO SIMULA NG PAGE -->

      <div id="page-wrapper">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Welcome {{name}}
              </h1>
              <h2 class="title">Announcements</h2>
            </div>
          </div>
        </section>

        <!-- /.row -->

        <div class="row">
          <div class="col-lg-12">

            <ul>
              <li>General Assembly is October 10, 2018.</li>
              <li>Check calendar for school holidays.</li>
              <li>Prepare for school outing next term.</li>

            </ul>
          </div>
        </div>

        <div class="row" style="padding-top: 50px">
          <div class="col-lg-6">

            <h3>Attendance for the week</h3>
            <table width="100%" class="table table-striped table-bordered table-hover" id="salesTableDays">
              <thead>

              <tr>
                <th>Date</th>
                <th>Attendance Count</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="entry in attendanceLog">
                <td>
                  {{entry.date}}
                </td>
                <td>
                  {{entry.attendanceCount}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- /.row -->
      </div>
      <!-- /#page-wrapper -->

    </div>
    <input type="text" id="added"/>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Dashboard',
    data() {
      return {
        name: '',
        attendanceLog: [],
        role: '',
        userId: ''
      }
    },
    methods: {
      loadAttendance: function () {
        axios.get(this.endpoint + '/getWeeklyAttendance', {})
          .then(response => {
            this.attendanceLog = response.data
          }).catch(e => {
          console.log(e)
        })
      }
    },
    created() {
      console.log('This.',this)
      this.name = this.parent.user.username
      this.loadAttendance()
    }
  }
</script>

<style scoped>

</style>
