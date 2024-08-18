<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a class="h1" href="#">
            Agile<b>Forge</b>
          </a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form>
            <div class="input-group mb-3">
              <input class="form-control" type="email" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <FontAwesome :icon="faEnvelope" />
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input class="form-control" type="password" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <FontAwesome :icon="faLock"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons"

export default {
  computed: {
    faEnvelope: () => faEnvelope,
    faLock: () => faLock,
  },
}
</script>
