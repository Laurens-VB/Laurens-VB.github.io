(function()  {
    /*let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <h1 id="H1">BRO</h1>
    <head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js"></script>
    <style>
        #map {position: absolute; top: 50; right: 0; bottom: 0; left: 0;}
    </style>
    </head>
    <body>
    <div id="map">
        <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p>
    </div>
    `;*/

    var script = document.createElement('script');
    script.innerHTML = `console.log("TEST")`;
    
    
    customElements.define('com-geomap', class geomap extends HTMLElement 
    {

		constructor() {
            super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(script.content.cloneNode(true));
            this._firstConnection = false;

            
            this.$embeddedHtml = this._shadowRoot.querySelector('#embeddedHtml');

            this.addEventListener("mouseover", () =>{
                var properties = {selectedRegionISO2 : document.cookie};
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }))
            });

            /*
            this.addEventListener("click", () =>{
                console.log("click");
            });

            this.addEventListener("mousemove", () =>{
                console.log("mousemove");
            });

            this.addEventListener("mousedown", () =>{
                console.log("mousedown");
            });
            */
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
    });
})();
