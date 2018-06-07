'use strict';

var app = new Vue({
    el: '#app',
    data: {
        notifications: [],
        order: 1
    },
    computed: {},
    mounted: function mounted() {
        var _this = this;

        axios.get('https://api.myjson.com/bins/15c1r6').then(function (response) {
            return _this.notifications = response.data;
        });
    },

    methods: {
        markAsSeen: function markAsSeen(index) {
            app.sortNotification(app.notifications)[index].seen = true;
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
        },
        timeConverter: function timeConverter(index) {
            var date = new Date(app.sortNotification(app.notifications)[index].timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = date.getFullYear();
            var month = months[date.getMonth()];
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var time = month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;

            return time;
        },
        sortNotification: function sortNotification(notifications) {

            return notifications.slice().sort(function (a, b) {
                return a.timestamp - b.timestamp;
            });
        }
    }
});