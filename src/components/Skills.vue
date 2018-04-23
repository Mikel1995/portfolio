<template>
    <div>
        <grid-loader :loading="isLoading" :color="'#007bff'" :style="{'margin-left': '50%', 'margin-top': '20%'}"></grid-loader>
        <div v-if="!isLoading" class="main-title">
            <h1>professional skills</h1>
            <div class="divider">
            </div>
        </div>
        <div v-if="!isLoading" class="container">
            <div v-for="skill in skills">
                {{skill.name}}
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{ width: skill.nivel+'%'}">
                        <span class="sr-only">40% Complete (success)</span>
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
        name: 'Skills',
        mixins: [helper],
        components: {
            GridLoader
        },
        data() {
            return {
                skills: [],
                isLoading: true
            }
        },
        mounted() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.getSkills(
                    success => {
                        this.skills = success.body;
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
