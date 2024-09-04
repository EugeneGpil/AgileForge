<template>
  <div class='login__navbar sidebar-mini sidebar-closed sidebar-collapse'>
    <div class='wrapper login__wrapper'>
      <nav class='login__main-header main-header navbar navbar-expand navbar-white navbar-light'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item'>
            <span class='nav-link'>
              <i class='login__flag-icon' />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class='login-page'>
    <div class='login-box'>
      <div class='card card-outline card-primary'>
        <div class='card-header text-center'>
          <LogoComponent />
        </div>
        <div class='card-body'>
          <!--suppress JSUnresolvedReference -->
          <p class='login-box-msg'>{{ $t('login.Sign_in_to_start_your_session') }}</p>
          <form>
            <div class='input-group mb-3'>
              <input class='form-control' type='email' placeholder='Email'>
              <div class='input-group-append'>
                <div class='input-group-text'>
                  <FontAwesome :icon='faEnvelope' />
                </div>
              </div>
            </div>
            <div class='input-group mb-3'>
              <input class='form-control' type='password' placeholder='Password'>
              <div class='input-group-append'>
                <div class='input-group-text'>
                  <FontAwesome :icon='faLock' />
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
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import LogoComponent from '~/src/shared/ui/LogoComponent.vue'

export default {
  computed: {
    faEnvelope: () => faEnvelope,
    faLock: () => faLock,
  },
  components: {
    LogoComponent,
  },
}
</script>

<style scoped lang="scss">
.login {
  &__navbar {
    height: 0;
  }
  &__flag-icon {
    cursor: pointer;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    width: 1.33333333em;
    background-image: url('/img/flags/us.svg');
  }
}
.login__wrapper > nav.login__main-header {
  margin-left: 0 !important;
}
</style>
