<template>
    <div>
        
        <div class="main-title">
            <h1>education</h1>
        </div>
        <div class="content">
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
    export default {
    }
</script>

<style scoped>

</style>
