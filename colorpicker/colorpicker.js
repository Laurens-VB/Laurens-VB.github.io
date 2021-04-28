(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <embed id = "embeddedHtml" type="text/html" src="https://laurens-vb.github.io/leafletTest.html"  width="700" height="700">
    `;

    customElements.define('com-colorpicker', class ColorPicker extends HTMLElement 
    {

		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;

            
            listenCookieChange(({oldValue, newValue})=> {
                console.log(`Cookie changed from "${oldValue}" to "${newValue}"`);
              }, 1000);

            this.addEventListener("onstorage", () => {
                console.log("plz plz plz do something :'(");
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

        listenCookieChange(callback, interval = 1000) {
            let lastCookie = document.cookie;
            setInterval(()=> {
              let cookie = document.cookie;
              if (cookie !== lastCookie) {
                  console.log(":00000000000");
                try {
                  callback({oldValue: lastCookie, newValue: cookie});
                } finally {
                  lastCookie = cookie;
                }
              }
            }, interval);
          }
    });
})();
