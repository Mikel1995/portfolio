import Vue from "vue";
import Router from 'vue-router';


import Personalinfo from '../components/PersonalInfo.vue'
import Skills from '../components/Skills'
import Menu from '../components/Menu'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Works from '../components/Works'
import SingleProject from '../components/SingleProject.vue'


Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            name: "Personalinfo",
            component: Personalinfo
        },
        {
            path: "/skills",
            name: "Skills",
            component: Skills
        },
        {
            path: "/experience",
            name: "Experience",
            component: Experience
        },
        {
            path: "/education",
            name: "Education",
            component: Education
        },
        {
            path: "/works",
            component: Works,
            children: [
                {
                    path: '/project',
                    component: SingleProject
                }
            ]
        }
    ]
});

export default router;