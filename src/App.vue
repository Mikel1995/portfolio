<template>
  <div>
    <div v-if="!isLoading" class="row" id="app">
      <div class="col-xs-3 col-sm- col-md-3 col-lg-3">
        <app-menu></app-menu>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <transition name="slide-fade" mode="out-in">
          <component :is="componentId"></component>
        </transition>
      </div>
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
  import {
    RingLoader
  } from 'vue-spinner/dist/vue-spinner.min.js'
  export default {
    name: 'app',
    components: {
      appPersonalinfo: Personalinfo,
      appSkills: Skills,
      appLanguagesAndInteres: LanguagesAndInteres,
      appMenu: Menu,
      appExperience: Experience,
      appEducation: Education,
      appWorks: Works,
      RingLoader
    },
    data() {
      return {
        isLoading: true,
      }
    },
    created() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    computed: {
      componentId() {
        return this.$store.state.componentId;
      }
    }
  }
</script>

<style>
  html {
    overflow-x: hidden;
  }

  .v-ring1 {
    height: 100% !important;
    width: 100% !important;
    margin-top: 20% !important;
  }
  .v-ring2,
  .v-ring3 {
    /* top: 30% !important; */
    left: 45% !important;
  }
  
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
