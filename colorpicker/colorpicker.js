(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <embed type="text/html" src="https://laurens-vb.github.io/leafletTest.html"  width="700" height="700">
    `;

    tmpl.addEventListener("onClicked", () =>{
        console.log("HMMMMMMMMM");
    })

    customElements.define('com-colorpicker', class ColorPicker extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            this.addEventListener("onClicked", () => {
                /*var properties = {color : this.$colorInputField.value };
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }));*/
                console.log("HEEE HEEE HEEE HAAA HAAA HAAA HOO HOOO HOOO");
                console.log("REEEEEEE");
			})
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
