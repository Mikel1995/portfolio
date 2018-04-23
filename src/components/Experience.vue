<template>
    <div>
        <grid-loader :loading="isLoading" :color="'#007bffcolor'" :style="{'margin-left': '50%', 'margin-top': '20%'}"></grid-loader>
        <div v-if="!isLoading" class="main-title">
            <h1>experience</h1>
        </div>
        <div v-if="!isLoading" class="content">
            <div class="block-content ">
                <div class="timeline experience">
                    <div class="row ">
                        <div class="col-md-12">
                            <div class="exp-holder margTop">
                                <div v-for="work in works" class="exp">
                                    <div class="hgroup">
                                        <h4>{{work.position}} - {{work.institution}}</h4>
                                        <h6><i class="fa fa-calendar-plus"></i>{{work.period}}</h6>
                                    </div>
                                    <p>{{work.description}}
                                    </p>
                                </div>
                            </div>
                        </div>
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
        mixins: [helper],
        components: {
            GridLoader
        },
        data() {
            return {
                works: [],
                isLoading: true
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.getWorkexperience(
                    success => {
                        this.works = success.body;
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
