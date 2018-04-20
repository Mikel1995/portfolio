<template>
    <div>
        <div class="main-title">
            <h1>Languages</h1>
        </div>
        <div class="container">
            <div v-for="language in languages">
                {{language.name}}
            <div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width: language.nivel+'%'}">
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
        mixins: [helper],
        data() {
            return {
                languages: []
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.getLanguages(
                    success => {
                        this.languages = success.body;
                        console.log('this.languages: ', this.languages);
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
