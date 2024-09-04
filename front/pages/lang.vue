<template>
  <div class='login-page'>
    <div class='login-box'>
      <div class='card card-outline card-primary'>
        <div class='card-header text-center'>
          <LogoComponent />
        </div>
        <div class='card-body'>
          <!--suppress JSUnresolvedReference -->
          <p class='text-center mb-3'>{{ $t('lang.Select_Language') }}</p>
          <div class='text-center mt-2 mb-3'>
            <span class='btn btn-block btn-secondary'>English</span>
            <span class='btn btn-block btn-secondary'>Русский</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoComponent from '~/src/shared/ui/LogoComponent.vue'
</script>
