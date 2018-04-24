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
                                <div v-for="educ in education" class="exp">
                                    <div class="hgroup">
                                        <h4>{{educ.graduation}}</h4>
                                        <h6><i class="fas fa-calendar-plus"></i>{{educ.period}}</h6>
                                    </div>
                                    <p>
                                        {{educ.school}}
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
            education: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
