<template>
    <div>
        <div class="main-title">
            <h1>professional skills</h1>
            <div class="divider">
            </div>
        </div>
        <div class="container">
            <div v-for="skill in skills" v-bind="skill.name">
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
    export default {
        name: 'Skills',
        mixins: [helper],
        data() {
            return {
                skills: []
            }
        },
        mounted(){
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.getSkills(
                    success => {
                        this.skills = success.body;
                        console.log('this.skills: ', this.skills);
                    },
                    error => {
                        console.log('error: ', error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
