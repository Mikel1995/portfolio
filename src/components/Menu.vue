<template>
<div>
        <div class="main-header" >

              <img :src="personalInfo.PathImg" class="img-circle" alt="Cinque Terre" width="304" height="236"> 
            <nav id="main-nav" class="main-nav clearfix tabbed">
                <ul>
                    <li><a href="#about"><i class="fas fa-user"></i>About</a></li>
                    <li><a href="#portfolio"><i class="fas fa-code"></i>Skills</a></li>
                    <li><a href="#blog"><i class="fas fa-briefcase"></i>Expierence</a></li>
                    <li><a href="#blog"><i class="fas fa-graduation-cap"></i>Education</a></li>
                    <li><a href="#contact"><i class="fas fa-camera"></i>My Projects</a></li>
                </ul>
            </nav>
        </div>
        <div class="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
            <ul class="social">
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fas fa-at"></i></a></li>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            </ul>
            <p>&copy; 2018 Mikel Kasneci</p>
        </div>
    </header>
</div>
    
</template>

<script>
    import helper from '../services/getData'
  export default {
    name: 'Menu',
    mixins: [helper],
    data() {
      return {
        personalInfo: [],
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
            console.log('this.personalInfo: ', this.personalInfo);
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

#header{
    margin-left: 20px;
    width: 80%;
    
}
/* .main-header nav{
    width: 80%;
} */
</style>


