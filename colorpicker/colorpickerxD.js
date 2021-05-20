(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <embed id = "embeddedHtml" type="text/html" src="https://laurens-vb.github.io/leafletTest.html"  width="700" height="700">
    `;

    customElements.define('com-kaart', class Kaart extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            
            this.$embeddedHtml = this._shadowRoot.querySelector('#embeddedHtml');

            this.addEventListener("mouseover", () =>{
                console.log("mouseover started");

                var cookieObj = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((accumulator, [key,value]) =>
                  ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
                {});

              console.log(cookieObj.selectedLocation);

                var properties = {selectedRegionISO2 : cookieObj.selectedLocation};
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }));
            });

            this.addEventListener("click", () =>{
                console.log("click");
            });

            this.addEventListener("mousemove", () =>{
                console.log("mousemove");
            });

            this.addEventListener("mousedown", () =>{
                console.log("mousedown");
            });
            


            console.log(this.$embeddedHtml);
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
