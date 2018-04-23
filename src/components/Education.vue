<template>
    <div>
        <grid-loader :loading="isLoading" :color="'#007bff'" :style="{'margin-left': '50%', 'margin-top': '20%'}"></grid-loader>
        
        <div v-if="!isLoading" class="main-title">
            <h1>education</h1>
        </div>
        <div v-if="!isLoading" class="content">
            <div class="block-content">
                <div class="timeline education">
                    <div class="row ">
                        <div class="col-md-12">
                            <div class="exp-holder margTop">
                                <div v-for="education in educations" class="exp">
                                    <div class="hgroup">
                                        <h4>{{education.graduation}}</h4>
                                        <h6><i class="fas fa-calendar-plus"></i>{{education.period}}</h6>
                                    </div>
                                    <p>
                                        {{education.school}}
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
                educations: [],
                isLoading: true
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.getEducation(
                    success => {
                        this.educations = success.body;
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
