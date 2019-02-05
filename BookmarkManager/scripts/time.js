window.onload=function() {

    /*Time after page load*/
    function afterLoadTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        document.getElementById('out_time').innerHTML = hours + ":" + minutes;
    }
    afterLoadTime();
    /*Time after page load*/

    /*Refreshed time*/
    setInterval(function () {
        let time = new Date();

        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        document.getElementById('out_time').innerHTML=hours+":"+minutes;
    }, 1000);
    /*Refreshed time*/

};
