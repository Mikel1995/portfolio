<template>
  <div class="row" id="app">
    <div class="col-xs-3 col-sm- col-md-3 col-lg-3">
      <app-menu></app-menu>
      <app-languages-and-interes></app-languages-and-interes>
    <hr>
    </div>
    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
    <app-personalinfo></app-personalinfo>
    <hr>
    <app-skills></app-skills>
    <hr>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-works></app-works>
    </div>
  </div>
</template>

<script>
import Personalinfo from './components/PersonalInfo.vue'
import Skills from './components/Skills'
import LanguagesAndInteres from './components/LanguagesAndInteres'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Education from './components/Education'
import Works from './components/Works'
export default {
  name: 'app',
  components: {
    appPersonalinfo: Personalinfo,
    appSkills: Skills,
    appLanguagesAndInteres:LanguagesAndInteres,
    appMenu: Menu,
    appExperience: Experience,
    appEducation: Education,
    appWorks: Works
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
