var helper = {
    methods: {
        getPersonalInfo(success, error){
            this.$http.get('personaleinfo.json').then(success, error);
        },
        getSkills(success, error){
            this.$http.get('skills.json').then(success, error);
        },
        getWorkexperience(success, error){
            this.$http.get('resume/workexperience.json').then(success, error);
        },
        getEducation(success, error){
            this.$http.get('resume/education.json').then(success, error);
        },
        getLanguages(success, error){
            this.$http.get('languages.json').then(success, error);
        },
        getMusic(success, error){
            this.$http.get('hobby/music.json').then(success, error);
        }
    }
}

export default helper