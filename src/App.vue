<template>
  <div>
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
            <router-link to="/dashboard" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Homepage</strong></p></router-link>
            <router-link to="/attendance" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Attendance Logs</strong></p></router-link>
            <router-link to="/messages" class="navbar-item button is-1"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Messages</strong></p></router-link>
            <router-link to="/addStudent" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Add Student</strong></p></router-link>
            <router-link to="/addParent" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Add Parent</strong></p></router-link>
            <router-link to="/addGuidance" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Add Guidance</strong></p></router-link>
            <router-link to="/addUser" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Add User</strong></p></router-link>
            <router-link to="/viewStudents" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>View Students</strong></p></router-link>
            <router-link to="/guidanceReport" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Post Guidance Report</strong></p></router-link>
            <router-link to="/viewSummary" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>View Summary Report</strong></p></router-link>
            <router-link to="/login" class="navbar-item button"><i class="fas fa-shield-alt"/> <p style="color: #44F;"><strong>Logout</strong></p></router-link>
          </div>
        </nav>
      </div>
      <div class="column is-four-fifths">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
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
