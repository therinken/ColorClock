window.onload = app;

function app() {
    "use strict";

    function handleSecond() {
        try {
        	count();
        } catch (e) {
            console.log("error:", e, e.stack);
        }
    }

    function count() {
        var d = new Date();

        // prefixing with 0s
        // method 2
        var parts = ['getHours', 'getMinutes', 'getSeconds'];
        var time2 = parts.map(function(functionName) {
            var num = d[functionName]();
            return num < 10 ? "0" + num : num;
        });

        span.textContent = time2.join(":");

        body.style['background-color'] =
            "rgb(" +
            convertTimeToRGB(time2).join(',') +
            ")";

        // convert to HEX :-)
        // console.log(
        // 	convertTimeToRGB(time2).map(function(value){
        // 		return value.toString(16);
        // 	}).join(":")
        // )
    }


    /**
     * convertTimeToRGB
     * @param  {array} times
     * @return {array}
     */
    function convertTimeToRGB(times) {
    	if(!(times instanceof Array) || times.length !== 3){
    		throw new Error("times should be an array of 3 numbers");
    	}

        var ranges = [24, 60, 60],
            result = [];

        times.forEach(function(time, index) {
            result[index] = ~~ (time / ranges[index] * 255);
        });

        return result;
    }

    var span = document.querySelector('.clock-text span');
    var body = document.querySelector('body');

    setInterval(handleSecond, 1000);
}
