<template>
  <div class="container">
    <header class="header">
      <div class="container">
        <img class="profile-image img-responsive pull-left" style="width:250px; height:200px" v-bind:src="profilePath" alt="Mikel Kasneci" />
        <div class="profile-content pull-left">
          <h1 class="name">Mikel Kasneci</h1>
          <h2 class="desc">Web App Developer</h2>
          <ul class="social list-inline">
            <li><a href="https://www.linkedin.com/in/mikel-kasneci-819927148"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Mikel1995"><i class="fa fa-github-alt"></i></a></li>
            <li><a href="https://facebook.com/kasnecimikel"><i class="fa fa-facebook"></i></a></li>
            <li class="last-item"><a href="#"><i class="fa fa-hacker-news"></i></a></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import helper from '../services/getData'
  export default {
    name: 'Personalinfo',
    mixins: [helper],
    data() {
      return {
        profilePath: '../../static/images/profile.jpg'
      }
    },
    created(){
      this.getInfo();
    },
    methods: {
      getInfo() {
        this.getPersonalInfo(
          success => {
            console.log('success: ', success.body);
          },
          error => {
            console.log('error: ', error);
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>
