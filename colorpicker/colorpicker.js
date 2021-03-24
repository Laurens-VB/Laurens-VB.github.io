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

            this.$colorInputField = this._shadowRoot.querySelector('#color');

            var color = "";

            this.addEventListener("input", event => {
				var event = new Event("input");
				this.dispatchEvent(event);

                color = this.$colorInputField.value;
			});

            changedProperties["color"] = color;

            if ("color" in changedProperties) {
				this.$color = changedProperties["color"];
			}
        }
        
        onCustomWidgetDestroy(){
        }

        redraw(){


           /*
            var color;
            console.log("so far so goodly");
            tmpl.addEventListener('input', () =>
            {
                console.log("kekw")
                color = tmpl.nodeValue;
            })

            console.log(color);
            console.log("lmfao");
            */



            /*
            var colorChoice;

            colorInputField.addEventListener('input', () =>{
                colorChoice = colorInputField.nodeValue;
            })

            if(colorChoice != undefined){
                console.log(colorChoice);
                console.log("kekw");
            }
            console.log("lmfao");
            */
        }
    });
})();
