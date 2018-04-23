<template>
    <div>
        <div class="main-title">
            <h1>experience</h1>
        </div>
        <div class="content">
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
    export default {
    }
</script>

<style scoped>

</style>
