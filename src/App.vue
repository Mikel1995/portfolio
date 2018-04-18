<template>
  <div class="row" id="app">
    <div class="col-xs-3 col-sm- col-md-3 col-lg-3">
    <app-personalinfo></app-personalinfo>
    <hr>
    <app-languages-and-interes></app-languages-and-interes>
    </div>
    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
    <app-skills></app-skills>
    </div>
  </div>
</template>

<script>
import Personalinfo from './components/PersonalInfo.vue'
import Skills from './components/Skills'
import LanguagesAndInteres from './components/LanguagesAndInteres'
export default {
  name: 'app',
  components: {
    appPersonalinfo: Personalinfo,
    appSkills: Skills,
    appLanguagesAndInteres:LanguagesAndInteres
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
