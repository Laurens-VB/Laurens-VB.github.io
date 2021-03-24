(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <input type="color" id="color">
    `;

    customElements.define('com-colorpicker', class HelloWorld1 extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            this.$colorInputField = shadowRoot.querySelector('#color');
            console.log(":00000000");
            console.log(this.$colorInputField);

            this.addEventListener("input", event => {
				var event = new Event("input");
				this.dispatchEvent(event);

                console.log( this.$colorInputField.value);
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
