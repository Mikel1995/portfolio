<template>
  <div>
    <div class="main-title">
      <h1>who am i</h1>
      <div class="divider">
        <div class="zigzag large clearfix " data-svg-drawing="yes">
          <svg xml:space="preserve" viewBox="0 0 69.172 14.975" width="37" height="28" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                               <path d="M1.357,12.26 10.807,2.81 20.328,12.332
                                                  29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793 "  style="stroke-dasharray: 93.9851, 93.9851; stroke-dashoffset: 0;"/>
                                            </svg>
        </div>
      </div>
    </div>
    <div class="content">
      <!--Block content-->
      <div class="block-content margBSmall">
        <div class=" profile margBSmall">
          <h1>Carlose smith</h1>
          <h3>Web designer / Web developer</h3>
        </div>
        <!--Row-->
        <div class="row">
          <div class="col-md-6">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </p>
          </div>
          <div class="col-md-6">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </p>
          </div>
        </div>
        <!--End row-->
      </div>
      <!--End block content-->
      <!--Block content-->
      <div class="block-content">
        <div class="info">
          <!--Row-->
          <div class="row">
            <div class="col-md-6">
              <ul class="info-list clearfix">
                <li><span class="inf">Name </span> <span class="value">Carlose Smith</span></li>
                <li><span class="inf">Date of birth</span> <span class="value"> September 9, 1982 </span></li>
                <li><span class="inf">Address</span> <span class="value"> 1234 Street Road City Name</span></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="info-list">
                <li><span class="inf">Email</span> <span class="value">youremail@gmail.com</span></li>
                <li><span class="inf">Phone</span> <span class="value"> + 123 456 789 456	</span></li>
                <li><span class="inf">Skype</span> <span class="value">Carlose_Smith</span></li>
              </ul>
            </div>
          </div>
          <!--End row-->
        </div>
      </div>
      <!--End block content-->
    </div>
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
    created() {
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
