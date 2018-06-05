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
                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="password" placeholder="Your Password">
                  </div>
                </div>
                <!--<div class="field">-->
                  <!--<label class="checkbox">-->
                    <!--<input type="checkbox">-->
                    <!--Remember me-->
                  <!--</label>-->
                <!--</div>-->
                <button class="button is-block is-info is-large is-fullwidth">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>

</style>
