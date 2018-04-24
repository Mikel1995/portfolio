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
                                <div v-for="w in work" class="exp">
                                    <div class="hgroup">
                                        <h4>{{w.position}} - {{w.institution}}</h4>
                                        <h6><i class="fa fa-calendar-plus"></i>{{w.period}}</h6>
                                    </div>
                                    <p>{{w.description}}
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
         props: {
            work: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
