(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>HALLO</h1>
        <embed id = "embeddedHtml" type="text/html" src="https://laurens-vb.github.io/kaart/kaart.html"  width="700" height="700">
    `;

    customElements.define('com-geomap', class geomap extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            
            this.$dateInputField = this._shadowRoot.querySelector('#date');

            this.addEventListener("input", () => {
                var properties = {
                    date : this.$dateInputField.value 
                };
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }));
                
			});
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
