const app = Vue.createApp({
    data() {
        return {
            myName: 'Marina',
            myAge: 21,
            imgSRC: 'https://www.cnet.com/a/img/37j-i-WbVCdNAPSOHXgb4BKcvsw=/1200x675/2019/05/17/b520bc74-57be-4c72-99bf-4fa675a326cc/gettyimages-611696914.jpg'
        };
    },
    methods:{
        addNumToAge: function() {
            return this.myAge + 5;
        }
    }

});

app.mount('#assignment');
