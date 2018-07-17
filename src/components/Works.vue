<template>
    <div>
        <div class="main-title">
            <h1>my works</h1>
        </div>
        <div class="content">
         <div class="container-fluid bg-3 text-center">    
  <div class="row">
   <router-link tag="li" to="/works/project">
    <div  v-for="item in images" :key="item.id" class="col-sm-3">
      <p>{{item.title}}</p>
      <img v-bind:src="item.image" class="img-responsive" style="width:100%" alt="Image">
    </div>
   </router-link>
  </div>
</div><br><br>
        </div>  
    </div>
</template>
<script>
import VueGallery from "vue-gallery";

export default {
  data() {
    return {
      images: [
          {
              image:"https://dummyimage.com/800/ffffff/000000",
              title: "Mikel"
          }
        ,
          {
              image:"https://dummyimage.com/1600/ffffff/000000",
              title: "Mikel"
          }
        ,
        {
            image:"https://dummyimage.com/1280/000000/ffffff",
              title: "Mikel"
        }
        ,
        {
             image:"https://dummyimage.com/400/000000/ffffff",
              title: "Mikel"
        }
       
      ],
      index: null
    };
  },
  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
</style>
