(function()
{
    let colorpickerHTML = document.createElement("colorpickerHTML");
	colorpickerHTML.innerHTML = `
        <h1>Hello World</h1>
	`;

    class Colorpicker extends HTMLElement 
    {
        constructor ()
        {
            super();
            let shadowRoot = this.attachShadow(
            {
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
            this.render();
        }
    }

    customElements.define("com-colorpicker", Colorpicker);
})();