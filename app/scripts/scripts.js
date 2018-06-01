'use strict';

var app = new Vue({
    el: '#app',
    data: {
        notifications: []
    },
    mounted: function mounted() {
        var _this = this;

        axios.get('https://api.myjson.com/bins/lp0qu').then(function (response) {
            return _this.notifications = response.data;
        });
    },

    methods: {
        markAsSeen: function markAsSeen(index) {
            app.notifications[index].seen = true;
        },
        iconType: function iconType(index) {
            switch (this.notifications[index].type) {
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

// 'notifications':[
//     {'type': "error", 'description': "Your computer is running low on Ram memory", 'seen': 'false'},
//     {'type': "facebook", 'description': "You have 2 new friends requests", 'seen': 'false'},
//     {'type': "health", 'description': "It is time gym!", 'seen': 'false'},
//     {'type': "facebook", 'description': "Two people liked your photo", 'seen': 'false'},
//     {'type': "facebook", 'description': "Aca Lukas invited you to 'Veliki Koncert Usce 2018.'", 'seen': 'false'},
//     {'type': "instagram", 'description': "Kim Kardasian liked your photo, Batman started following you!", 'seen': 'false'},
//     {'type': "health", 'description': "Drink water, it is important to stay hidrated when working!", 'seen': 'false'},
//     {'type': "instagram", 'description': "Check out this awesome cat photos", 'seen': 'false'}
// ]
// notifications:[
//     {type: "error", description: "Your computer is running low on Ram memory", seen: false, time: 2},
//     {type: "facebook", description: "You have 2 new friends requests", seen: false, time: 4},
//     {type: "health", description: "It is time gym!", seen: false, time: 5},
//     {type: "facebook", description: "Two people liked your photo", seen: false, time: 6},
//     {type: "facebook", description: "Aca Lukas invited you to 'Veliki Koncert Usce 2018.'", seen: false, time: 12},
//     {type: "instagram", description: "Kim Kardasian liked your photo, Batman started following you!", seen: false, time: 4},
//     {type: "health", description: "Drink water, it is important to stay hidrated when working!", seen: false, time: 3},
//     {type: "instagram", description: "Check out this awesome cat photos", seen: false, time: 10}
// ],