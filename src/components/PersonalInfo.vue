<template>
  <div>
    <div class="main-title">
      <h1>who am i</h1>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img :src="perlInfo.pathimg" class="img-rounded" alt="Mikel Kasneci" width="304" height="236">
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class=" profile margBSmall">
            <h1>{{ perlInfo.name }} {{ perlInfo.surname }} </h1>
            <h3>{{ perlInfo.profession }}</h3>
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
              {{ perlInfo.about }}
            </p>
          </div>
        </div>
      </div>
      <div class="block-content">
        <div class="info">
          <div class="row">
            <div class="col-md-6">
              <ul class="info-list clearfix">
                <li><span class="inf">Name </span> <span class="value">{{ perlInfo.name }} {{ perlInfo.surname }}</span></li>
                <li><span class="inf">Date of birth</span> <span class="value"> {{ perlInfo.birthday }} </span></li>
                <li><span class="inf">Address</span> <span class="value"> {{ perlInfo.address }}</span></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="info-list">
                <li><span class="inf">Email</span> <span class="value">{{ perlInfo.email }}</span></li>
                <li><span class="inf">Phone</span> <span class="value"> {{ perlInfo.phone }}	</span></li>
                <li><span class="inf">Skype</span> <span class="value">{{ perlInfo.skype }}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="main-title">
          <h1>Languages</h1>
        </div>
        <div class="container">
          <div v-for="lang in language" :key="lang.name">
            {{lang.name}}
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width: lang.nivel+'%'}">
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
             <div v-for="mus in music" :key="mus">
               <br>
             <i class="fa fa-headphones" aria-hidden="true"></i> {{mus}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personalinfo",
  props: {
    perlInfo: {
      type: Object
    },
    language: {
      type: Array
    },
    music: {
      type: Array
    }
  }
};

function tranformQueryData(item) {
  var label = "";
  var i = 0;

  for (var key in item) {
    if (i > 0) {
      label += item[key] + " ";
    }
    i++;
  }

  return label;
}
</script>

<style scoped>
</style>
