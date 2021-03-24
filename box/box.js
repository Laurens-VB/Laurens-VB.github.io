(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 10px;
			border-width: 2px;
			border-color: black;
			border-style: solid;
			display: block;
		} 

		body {
		  background: #fff;
		}
		
		.metric {
		  padding: 10%;
		}
		
		.metric svg {
		  max-width: 100%;
		}
		
		.metric path {
		  stroke-width: 75;
		  stroke: #ecf0f1;
		  fill: none;
		}
		
		.metric text {
		  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		
		.metric.participation path.data-arc {
		  stroke: #27ae60;
		}
		
		.metric.participation text {
		  fill: #27ae60;
		}		
		</style>
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric participation" data-ratio=".95">
		        <svg viewBox="0 0 1000 500">
			        <path d="M 950 500 A 450 450 0 0 0 50 500"></path>
					<text class='percentage' text-anchor="middle" alignment-baseline="middle" x="500" y="300" font-size="140" font-weight="bold">0%</text>
					<text class='title' text-anchor="middle" alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal"></text>
  	            </svg>
		      </div>
		    </div>
		  </div>
		</div>
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			
			this.$style = shadowRoot.querySelector('style');			
			this.$svg = shadowRoot.querySelector('svg');
			
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			
			this._props = {};
		}
		
		render(val, info, color, opslaan, useCookie, treshholds) {
			var val1 = val * 0.01;
			var x = this.svg_circle_arc_path(500, 500, 450, -90, val1 * 180.0 - 90);
			var rounded = Math.round( val * 10 ) / 10;

			
			if(rounded >=0 && rounded <=100) {
				this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;}.body {background: #fff;}.metric {padding: 10%;}.metric svg {max-width: 100%;}.metric path {stroke-width: 75;stroke: #ecf0f1;fill: none;}.metric text {font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation path.data-arc {stroke: ' + color + ';}.metric.participation text {fill: ' + color + ';}';
				this.$svg.innerHTML = '<path d="M 950 500 A 450 450 0 0 0 50 500"></path><text class="percentage" text-anchor="middle" alignment-baseline="middle" x="500" y="300" font-size="140" font-weight="bold">' + rounded + '%</text><text class="title" text-anchor="middle" alignment-baseline="middle" x="500" y="450" font-size="90" font-weight="normal">' + info + '</text><path d="' + x + '" class="data-arc"></path>"';
			}

			if(useCookie)
			{
				var decodedCookie = decodeURIComponent(document.cookie);
				decodedCookie = decodedCookie.slice(16);
				if(treshholds != undefined){
					console.log("<><><><><><>");
					console.log(treshholds);
					console.log("<><><><><><>");
					var addToCookie =  treshholds.slice(0,-1).replace("|",",");
					var decodedCookie = decodedCookie + addToCookie;
					if(opslaan){
						document.cookie = "SavedThreshhold="+ decodedCookie;
					}
				}
				console.log(decodedCookie);
				var split_decoded_cookie = decodedCookie.split(",");
				for(var i in split_decoded_cookie){
					var threshhold = split_decoded_cookie[i].split("->");

					var waarde = threshhold[0];
					var kleur = threshhold[1];

					if(val >= waarde){
						this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;}.body {background: #fff;}.metric {padding: 10%;}.metric svg {max-width: 100%;}.metric path {stroke-width: 75;stroke: #ecf0f1;fill: none;}.metric text {font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation path.data-arc {stroke: ' + kleur + ';}.metric.participation text {fill: ' + kleur + ';}';
					}
				}
			}

			if(treshholds != undefined)
			{
				var threshholds_split = treshholds.slice(0,-1).split("|");
				for(var threshholdIndex in threshholds_split)
				{
					var threshhold = (threshholds_split[threshholdIndex]).split("->");
					
					var waarde = threshhold[0];
					var kleur = threshhold[1];

					if(val >= waarde){
						this.$style.innerHTML = ':host {border-radius: 10px;border-width: 2px;border-color: black;border-style: solid;display: block;}.body {background: #fff;}.metric {padding: 10%;}.metric svg {max-width: 100%;}.metric path {stroke-width: 75;stroke: #ecf0f1;fill: none;}.metric text {font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation path.data-arc {stroke: ' + kleur + ';}.metric.participation text {fill: ' + kleur + ';}';
					}

				}
				if(opslaan){
					document.cookie = "SavedThreshhold=" + threshholds_split;
					console.log("opgeslagen");
				}
			}
		}
		  
		polar_to_cartesian(cx, cy, radius, angle) {
		    var radians;
		    radians = (angle - 90) * Math.PI / 180.0;
		    return [Math.round((cx + radius * Math.cos(radians)) * 100) / 100, Math.round((cy + radius * Math.sin(radians)) * 100) / 100];
		}
		
		svg_circle_arc_path(x, y, radius, start_angle, end_angle) {
		    var end_xy, start_xy;
		    start_xy = this.polar_to_cartesian(x, y, radius, end_angle);
		    end_xy = this.polar_to_cartesian(x, y, radius, start_angle);
		    return "M " + start_xy[0] + " " + start_xy[1] + " A " + radius + " " + radius + " 0 0 0 " + end_xy[0] + " " + end_xy[1];
		  };
		  

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("value" in changedProperties) {
				this.$value = changedProperties["value"];
			}
			
			if ("info" in changedProperties) {
				this.$info = changedProperties["info"];
			}
			
			if ("color" in changedProperties) {
				this.$color = changedProperties["color"];
			}

			if("colorMid" in changedProperties){
				this.$colorMid = changedProperties["colorMid"];
			}

			if("treshholds" in changedProperties){
				this.$treshholds = changedProperties["treshholds"];
			}

			if("opslaan" in changedProperties){
				this.$opslaan = changedProperties["opslaan"];
			}

			if("useCookie" in changedProperties){
				this.$useCookie = changedProperties["useCookie"];
			}
			
			this.render(this.$value, this.$info, this.$color, this.$opslaan, this.$useCookie,this.$treshholds);
		}

		/*
		sendSMS(text){
			const accountSid = "AC2c2836dfbcdebef0a1896b8e415a684b";
			const authToken = "7363a9d938bc365fc98d47b34b0f89e6";
			console.log(":DDDDDDDDD");
			const client = require('twilio')(accountSid, authToken);
			console.log(":0000000000000");

			client.messages
			.create({
				body: 'LMFAO xD xD xD KEKW',
				from: '+14247049449',
				to: '+32472950381'
			})
			.then(message => console.log(message.sid));

			console.log("kekw");
		} */
	}	
	customElements.define("com-demo-gauge", Box);
})();
