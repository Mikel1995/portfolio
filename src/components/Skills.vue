<template>
    <div>
        <div  class="main-title">
            <h1>professional skills</h1>
            <div class="divider">
            </div>
        </div>
        <div class="container">
            <div v-for="s in skill">
                {{s.name}}
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{ width: s.nivel+'%'}">
                        <span class="sr-only">40% Complete (success)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Skills',
        props: {
            skill: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
