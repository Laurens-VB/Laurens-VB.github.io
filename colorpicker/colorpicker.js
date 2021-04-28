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

            
            this.$embeddedHtml = this._shadowRoot.querySelector('#embeddedHtml');

            this.$embeddedHtml.addEventListener("click", () =>{
                console.log("yeeyeyeyeye")
            })

            console.log(this.$embeddedHtml);
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
