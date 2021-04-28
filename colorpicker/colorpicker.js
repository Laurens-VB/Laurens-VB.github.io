(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <embed id = "embeddedHtml" type="text/html" src="https://laurens-vb.github.io/leafletTest.html"  width="700" height="700">
    `;

    console.log("----------");
    console.log(document.getElementById("embeddedHtml"));
    console.log("----------");


    customElements.define('com-colorpicker', class ColorPicker extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            /*
            this.addEventListener("onClicked", () => {
                /*var properties = {color : this.$colorInputField.value };
                this.dispatchEvent(new CustomEvent("propertiesChanged", 
                {
                    detail: 
                    {
                        properties: properties
                    }
                }));
                console.log("HEEE HEEE HEEE HAAA HAAA HAAA HOO HOOO HOOO");
                console.log("REEEEEEE");
			})*/
		}
        

        connectedCallback(){
            this._firstConnection = true;
            this.redraw();

            var cookieObj = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((accumulator, [key,value]) =>
                    ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
                {});
        
            console.log("callbackConnected")
            console.log(cookieObj.selectedLocation);
        }

        disconnectedCallback(){
            var cookieObj = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((accumulator, [key,value]) =>
                    ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
                {});
        
            console.log("disconnectedCallback")
            console.log(cookieObj.selectedLocation);
        
        }

		onCustomWidgetBeforeUpdate(oChangedProperties) {
            var cookieObj = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((accumulator, [key,value]) =>
                    ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
                {});
        
            console.log("beforeUpdate")
            console.log(cookieObj.selectedLocation);
		}

		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }

            var cookieObj = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((accumulator, [key,value]) =>
                    ({...accumulator, [key.trim()]: decodeURIComponent(value) }),
                {});
        
            console.log("afterUpdate")
            console.log(cookieObj.selectedLocation);
        }
        
        onCustomWidgetDestroy(){
        }

        redraw(){
        }
    });
})();
