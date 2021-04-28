(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
    <style>
        #map {position: absolute; top: 0; right: 0; bottom: 0; left: 0;}
    </style>
    </head>
    <body>

    <h1>WORLDMAP 3</h1>
    <div id="map" style="width: 600px; height: 400px; top: 50px;">
        <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p>
    </div>
    </body>
    `;

    var headScript = document.createElement("script");
    headScript.type = "text/javascript";
    headScript.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js";
    document.head.appendChild(headScript);
    console.log("HEEE HEEE");

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "initiateLeaflet.js";
    document.head.appendChild(script);
    console.log("HEEE HEEE 2");

    customElements.define('com-colorpicker', ColorPicker)
    
    class ColorPicker extends HTMLElement 
    {

		constructor() {
            

			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            /*
            this.$colorInputField = this._shadowRoot.querySelector('#color');

            this.addEventListener("input", () => {
                var properties = {color : this.$colorInputField.value };
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }));
                
			});*/

            console.log("ZAWARDO");
		}
        

        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

        disconnectedCallback(){
        
        }

		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        onCustomWidgetDestroy(){
        }

        redraw(){
        }
    };
})();
