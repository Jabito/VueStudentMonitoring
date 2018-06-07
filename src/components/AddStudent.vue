<template>
  <div>
    <h1 class="is-block title">Add Student</h1>
    <form>
      <div class="columns">
        <div class="column is-half">
          <div class="field">
            <label class="label">First Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="First Name">
            </div>
          </div>
          <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Last Name">
            </div>
          </div>
          <div class="field">
            <label class="label">Middle Initial</label>
            <div class="control">
              <input class="input" type="text" placeholder="Middle Initial">
            </div>
          </div>
          <div class="field">
            <label class="label">Birthdate</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
        </div>
        <div class="column is-half">
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
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "AddStudent"
  }
</script>

<style scoped>

</style>
