<template>
  <div>
    <div class="main-title">
      <h1>who am i</h1>
    </div>
    <div class="content">
      <div class="block-content margBSmall">
        <div class=" profile margBSmall">
          <h1>{{ personalInfo.Name }} {{ personalInfo.Surname }} </h1>
          <h3>{{ personalInfo.Profession }}</h3>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>{{ personalInfo.About }}
            </p>
          </div>
          <div class="col-md-6">
            <p>{{ personalInfo.About }}</p>
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
                <li><span class="inf">Skype</span> <span class="value">{{ personalInfo.Name }}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        profilePath: '../../static/images/profile.jpg',
        personalInfo: []
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

</style>
