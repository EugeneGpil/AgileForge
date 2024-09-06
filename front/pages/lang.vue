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
            <!--suppress JSCheckFunctionSignatures -->
            <span
                class='lang__button btn btn-block btn-secondary'
                @click='setLocale("en")'>
              <i class='lang__flag lang__flag-usa mr-1' />
              English
            </span>
            <!--suppress JSCheckFunctionSignatures -->
            <span
                class='lang__button btn btn-block btn-secondary'
                @click='setLocale("ru")'>
              <i class='lang__flag lang__flag-ru mr-1' />
              Русский
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from '~/src/shared/ui/LogoComponent.vue'

export default {
  setup() {
    const {setLocale} = useI18n()

    return {
      setLocale,
    }
  },
  components: {
    LogoComponent,
  },
}
</script>

<style scoped lang="scss">
.lang {
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__flag {
    display: inline-block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.4rem;
    height: 1.4rem;
  }
  &__flag-usa {
    background-image: url('/img/flags/us.svg');
  }
  &__flag-ru {
    background-image: url('/img/flags/ru.svg');
  }
}
</style>
