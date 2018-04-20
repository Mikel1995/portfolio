<template>
    <header id="header">
        <div class="main-header">
            <figure class="img-profile">
                <img :src="profilePath" alt="" />
                <figcaption class="name-profile">
                    <span>Carlose smith <sup>&reg;</sup></span>
                </figcaption>
            </figure>
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
</template>

<script>
    export default {
        data() {
            return {
                  profilePath: '../../static/images/profile.jpg',
            }
        }
    }
</script>

<style>

</style>


