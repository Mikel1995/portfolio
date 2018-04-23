<template>
  <div>
    <grid-loader :loading="isLoading" :color="'#007bff'" :style="{'margin-left': '50%', 'margin-top': '20%'}"></grid-loader>
    <div class="main-title" v-if="!isLoading">
      <h1>who am i</h1>
    </div>
    <div class="content" v-if="!isLoading">
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img :src="personalInfo.PathImg" class="img-rounded" alt="Mikel Kasneci" width="304" height="236">
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class=" profile margBSmall">
            <h1>{{ personalInfo.Name }} {{ personalInfo.Surname }} </h1>
            <h3>{{ personalInfo.Profession }}</h3>
          </div>
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        </div>
      </div>
      <br>
      <div class="block-content margBSmall">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              {{ personalInfo.About }}
            </p>
          </div>
        </div>
      </div>
      <div class="block-content">
        <div class="info">
          <div class="row">
            <div class="col-md-6">
              <ul class="info-list clearfix">
                <li><span class="inf">Name </span> <span class="value">{{ personalInfo.Name }} {{ personalInfo.Surname }}</span></li>
                <li><span class="inf">Date of birth</span> <span class="value"> {{ personalInfo.Birthday }} </span></li>
                <li><span class="inf">Address</span> <span class="value"> {{ personalInfo.Address }}</span></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="info-list">
                <li><span class="inf">Email</span> <span class="value">{{ personalInfo.Email }}</span></li>
                <li><span class="inf">Phone</span> <span class="value"> {{ personalInfo.Phone }}	</span></li>
                <li><span class="inf">Skype</span> <span class="value">{{ personalInfo.Skype }}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="main-title">
          <h1>Languages</h1>
        </div>
        <div class="container">
          <div v-for="language in languages">
            {{language.name}}
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width: language.nivel+'%'}">
                <span class="sr-only">40% Complete (success)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="main-title">
          <h1>Favorite Coding Music</h1>
        </div>
        <div class="container">
             <div v-for="music in musics">
               <br>
             <i class="fa fa-headphones" aria-hidden="true"></i> {{music}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import helper from '../services/getData'
  import {
    GridLoader
  } from 'vue-spinner/dist/vue-spinner.min.js'
  export default {
    name: 'Personalinfo',
    mixins: [helper],
    components: {
      GridLoader
    },
    data() {
      return {
        personalInfo: [],
        isLoading: true,
        languages: [],
        musics: []
      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      getInfo() {
        this.getPersonalInfo(
          success => {
            this.personalInfo = success.body;
            this.getLang();
          },
          error => {
            console.log('error: ', error);
            this.getLang();
          }
        );
      },
      getLang() {
        this.getLanguages(
          success => {
            this.languages = success.body;
            this.getMus();
          },
          error => {
            this.getMus();
            console.log('error: ', error);
          })
      },
      getMus() {
        this.getMusic(
          success => {
            this.musics = success.body;
            console.log('this.musics: ', this.musics);
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

<style scoped>

</style>
