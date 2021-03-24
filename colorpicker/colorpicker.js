(function()
{
    let colorpickerHTML = document.createElement("colorpickerHTML");
	colorpickerHTML.innerHTML = `
		<form id="form">
            <div>
                <input type="color" id="color">
            </div>
		</form>
	`;

    class Colorpicker extends HTMLElement 
    {
        constructor ()
        {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });

            shadowRoot.appendChild(colorpickerHTML.contentEditable.cloneNode(true));

            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            })

            this._props = {};

        }

        render(color)
        {
            colorChoice = colorpickerHTML.querySelector("#color");

            colorChoice.addEventListener("keuzeKleur", () =>{
                let color = colorChoice.value;
                console.log(color);

            })
        }

        onCustomWidgetAfterUpdate(changedProperties){
            if("color" in changedProperties)
            {
                this.$color = changedProperties["color"];
            }
        }
    }

    customElements.define("colorpicker", Colorpicker);
})();