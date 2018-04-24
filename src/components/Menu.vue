<template>
  <div>
    <br>
    <br>
    <div class="list-group" id="list-tab" role="tablist">
      <a @click="changeComponent(0)" class="list-group-item list-group-item-action" :class="{active: isActive===0}" id="list-home-list" data-toggle="list" href="#" role="tab" aria-controls="home">About</a>
      <a @click="changeComponent(1)" class="list-group-item list-group-item-action" :class="{active: isActive===1}" id="list-profile-list" data-toggle="list" href="#" role="tab" aria-controls="Skills">Skills</a>
      <a @click="changeComponent(2)" class="list-group-item list-group-item-action" :class="{active: isActive===2}" id="list-messages-list" data-toggle="list" href="#" role="tab" aria-controls="Expierence">Expierence</a>
      <a @click="changeComponent(3)" class="list-group-item list-group-item-action" :class="{active: isActive===3}" id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="Education">Education</a>
      <a @click="changeComponent(4)" class="list-group-item list-group-item-action" :class="{active: isActive===4}" id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="My Projects">My Projects</a>
    </div>
    <div class="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
      <ul class="social">
        <li><a :href="perlInfo.Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a :href="perlInfo.MailTo"><i class="fas fa-at"></i></a></li>
        <li><a :href="perlInfo.Facebook"><i class="fab fa-facebook-f"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    props: {
      perlInfo: {
        type: Object
      }
    },
    data() {
      return {
        isActive: 0
      }
    },
    methods: {
      changeComponent(id) {
        switch (id) {
          case 0:
            this.isActive = 0
            this.$store.state.componentId = 'app-personalinfo';
            break;
          case 1:
            this.isActive = 1
            this.$store.state.componentId = 'app-skills';
            break;
          case 2:
            this.isActive = 2
            this.$store.state.componentId = 'app-experience';
            break;
          case 3:
            this.isActive = 3
            this.$store.state.componentId = 'app-education';
            break;
          case 4:
            this.isActive = 4
            this.$store.state.componentId = 'app-works';
            break;
          default:
            break;
        }
      }
    }
  }
</script>

<style scoped>
  #header {
    margin-left: 20px;
    width: 80%;
  }
</style>


