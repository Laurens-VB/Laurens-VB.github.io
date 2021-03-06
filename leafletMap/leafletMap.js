(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js"></script>
        <style>
          #map {position: absolute; top: 0; right: 0; bottom: 0; left: 0;}
        </style>
      </head>
      <body>
        <div id="map"></div>
        <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p>
        <script>
          var map = L.map('map').setView([50.641111, 4.668056], 1);
          L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=tLle2wcpHPrfuS2ObIb7',{
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 5,
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            crossOrigin: true
          }).addTo(map);
               
            addMarkerToMap(50.641111,4.668056,"BE",map);
            addMarkerToMap(51,10,"DE",map);
            addMarkerToMap(47,2,"FR",map);
    
          function addMarkerToMap(lat,lng,name,map)
            {
                L.marker([lat,lng]).addTo(map).on('click', () =>
                {
                    console.log(name);
                });
            }
    
        </script>
      </body>
    </html>
    `;

    customElements.define('com-leafletmap', class LeafletMap extends HTMLElement 
    {

		constructor() 
        {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            
            /*this.$colorInputField = this._shadowRoot.querySelector('#color');

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
