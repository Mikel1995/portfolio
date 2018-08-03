<template>
  <div>
    <div class="row" id="app">
      <div class="col-xs-3 col-sm- col-md-3 col-lg-3">
        <app-menu :perlInfo="personalInfo" ></app-menu>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <grid-loader :loading="isLoading" :color="'#007bff'" :size="'30px'" :style="{'margin-top': '25%', 'margin-left': '45%'}"></grid-loader>
        <!-- <transition name="slide-fade" mode="out-in">
          <component v-if="!isLoading" :is="componentId" :work="works" :education="educations" :skill="skills" :music="musics" :language="languages" 
         :perlInfo="personalInfo" ></component>
        </transition> -->
         <router-view v-if="!isLoading" :work="works" :education="educations" :skill="skills" :music="musics" :language="languages" 
         :perlInfo="personalInfo"></router-view>
      </div>
    </div>
  </div>
test
</template>

<script>
  import helper from './services/getData.js'
  import Personalinfo from './components/PersonalInfo.vue'
  import Skills from './components/Skills'
  import Menu from './components/Menu'
  import Experience from './components/Experience'
  import Education from './components/Education'
  import Works from './components/Works'
  import SingleProject from './components/SingleProject.vue'
  import {
    GridLoader
  } from 'vue-spinner/dist/vue-spinner.min.js'
  export default {
    name: 'app',
    mixins: [helper],
    components: {
      appPersonalinfo: Personalinfo,
      appSkills: Skills,
      appMenu: Menu,
      appExperience: Experience,
      appEducation: Education,
      appWorks: Works,
      GridLoader
    },
    data() {
      return {
        isLoading: true,
                works: [],
                educations: [],
                skills: [],
                works: [],
                musics: [],
                languages: [],
                personalInfo: []
      }
    },
    created() {
      this.getInfo();
    },
    computed: {
      componentId() {
        return this.$store.state.componentId;
      }
    },
    methods: {
      getInfo() {
        this.getPersonalInfo(
          success => {
            this.personalInfo = success.body;
            this.getLang()
          },
          error => {
            this.getLang()
            console.log('error: ', error);
          }
        );
      },
      getLang() {
        this.getLanguages(
          success => {
            this.getMus();
            this.languages = success.body;
          },
          error => {
            this.getMus();
            console.log('error: ', error);
          })
      },
      getMus() {
        this.getMusic(
          success => {
            this.getSkill()
            this.musics = success.body;
          },
          error => {
            this.getSkill()
            console.log('error: ', error);
          })
      },
      getSkill() {
        this.getSkills(
          success => {
            this.getExp();
            this.skills = success.body;
          },
          error => {
            this.getExp();
            console.log('error: ', error);
          })
      },
      getExp() {
        this.getWorkexperience(
          success => {
            this.getEduc();
            this.works = success.body;
          },
          error => {
            this.getEduc();
            console.log('error: ', error);
          })
      },
      getEduc() {
        this.getEducation(
          success => {
            this.educations = success.body;
            this.isLoading = false
          },
          error => {
            this.isLoading = false
            console.log('error: ', error);
          })
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
