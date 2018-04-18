var helper = {
    methods: {
        getPersonalInfo(success, error){
            this.$http.get('PersonaleInfo.json').then(success, error);
        },
        getSkills(success, error){
            this.$http.get('Skills.json').then(success, error);
        },
        getWorkexperience(success, error){
            this.$http.get('Workexperience.json').then(success, error);
        },
        getEducation(success, error){
            this.$http.get('Education.json').then(success, error);
        },
        getLanguages(success, error){
            this.$http.get('Languages.json').then(success, error);
        },
        getMuzic(success, error){
            this.$http.get('Muzic.json').then(success, error);
        }
    }
}

export default helper