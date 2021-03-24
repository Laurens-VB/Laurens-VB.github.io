(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>LAURENS HAIP</h1>
    `;

    customElements.define('com-colorpicker', class ColorPicker extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        connectedCallback(){
        }

        disconnectedCallback(){
        
        }

		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

		onCustomWidgetAfterUpdate(oChangedProperties) {
            this.render();
        }
        
        onCustomWidgetDestroy(){
        }

        render(){}
    });
})();