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

    class Colorpicker2 extends HTMLElement 
    {
        constructor ()
        {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });

            shadowRoot.appendChild(colorpickerHTML.content.cloneNode(true));

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
                let kleur = colorChoice.value;
                console.log("kleur" = kleur);
                console.log("color" = color)

            })
        }

        onCustomWidgetAfterUpdate(changedProperties){
            if("color" in changedProperties)
            {
                this.$color = changedProperties["color"];
            }

            this.render(this.$color);
        }
    }

    customElements.define("com-colorpicker", Colorpicker2);
})();