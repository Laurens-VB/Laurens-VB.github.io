(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <input type="color" id="color">
    `;

    customElements.define('com-colorpicker', class ColorPicker extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            
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
