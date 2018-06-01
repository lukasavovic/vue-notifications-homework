var app = new Vue({
    el: '#app',
    data: {
        notifications: []
    },
    mounted () {
        axios
          .get('https://api.myjson.com/bins/lp0qu')
          .then(response => (this.notifications = response.data))
    },
    methods: {
        markAsSeen: (index)=>{
            app.notifications[index].seen = true;
        },
        iconType: function (index){
            switch(this.notifications[index].type){
                case 'error':
                    return 'img/warning.png';
                    break;
                case 'facebook':
                    return 'img/facebook.png';
                    break;
                case 'instagram':
                    return 'img/instagram.png';
                    break;
                case 'health':
                    return 'img/health.png';
                    break;    
            }
        }
    }
});

