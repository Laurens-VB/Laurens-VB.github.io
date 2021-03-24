(function()  {

    let inputField = tmpl.createElement('input');
    inputField.setAttribute('type', 'color');
    inputField.setAttribute('id', 'color');

    customElements.define('com-colorpicker', class HelloWorld1 extends HTMLElement {

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
        }
        
        onCustomWidgetDestroy(){
        }

        redraw(){
            let colorInputField = tmpl.querySelector('#color');

            console.log(colorInputField);
            console.log("lmfao");



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
