			window.onload = function () {
				var counterMin = 0;
				var counterSec = 0;
				var counterMili = 0;
				var intervalMili;
				
				function countMili() {
					if(counterMili < 10) {
							get("mili").innerHTML = '0' + counterMili;
						} else {
							get("mili").innerHTML = counterMili;
						}
					
					counterMili++;
					
					if(counterMili%50 == 0) {
						counterSec++;
						if(counterSec < 10) {
							get("sec").innerHTML = '0' + counterSec;
						} else {
							get("sec").innerHTML = 0 + counterSec;
						}
						counterMili = 0;
					}
					
					if(counterSec/59 == 1) {
						counterSec = 0;
						counterMin++;
						if(counterMin < 10) {
							get("min").innerHTML = '0' + counterMin;
						} else {
							get("min").innerHTML = counterMin;
						}
					}
				}
				
				get("startButton").onclick = function () {
					intervalMili = setInterval(countMili, 10);
				};
				
				get("stopButton").onclick = function () {
					clearInterval(intervalMili);
				};
				
				get("resetButton").onclick = function () {
					get("mili").innerHTML = "00";
					get("sec").innerHTML = "00";
					get("min").innerHTML = "00";
					counterMin = 0;
					counterSec = 0;
					counterMili = 0;
					clearInterval(intervalMili);
				}
			};
			
			var get = function(id){
				return document.getElementById(id);
			}