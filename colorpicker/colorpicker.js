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

            this.$kleur = '';
            this.addEventListener("input", () => {
                this.$kleur = this.$colorInputField.value;
                console.log(":(");
                detail: 
                {
                    properties:
                    {
                        color: this._shadowRoot.querySelector('#color').value;
                    }
                }
                console.log("-.-");
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


            /*

            var color = "";



            console.log(color);

            oChangedProperties["color"] = color;

            if ("color" in oChangedProperties) {
				this.$color = oChangedProperties["color"];
			}

            */
        }
        
        onCustomWidgetDestroy(){
        }

        redraw(){
        }
    });
})();
