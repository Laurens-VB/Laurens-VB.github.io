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

            this.addEventListener("change", event => {
				var event = new Event("change");
				this.dispatchEvent(event);
                console.log(":0000");
                console.log(this.$colorInputField.value);
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

            this.$colorInputField = this._shadowRoot.querySelector('#color');

            this.addEventListener("change", event => {
				var event = new Event("change");
				this.dispatchEvent(event);
                console.log("DDDDDD:");
                console.log(this.$colorInputField.value);
			});


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
