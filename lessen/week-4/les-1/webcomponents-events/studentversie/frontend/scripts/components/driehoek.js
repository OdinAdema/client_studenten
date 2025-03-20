class Driehoek extends HTMLElement {
    
    shadowRoot;
    templateId = 'click-driehoek-tpl';
    elementId = 'click-driehoek';
    
    
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.state = {
            driehoekClicks: 0
        };
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
    }
    connectedCallback() {
        this.shadowRoot.querySelector('div')
            .classList.add(this.getAttribute('color'));
    }

    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/driehoek.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners(){
        this.addEventListener('click', this.sendEvent);
    }
    sendEvent(){
        this.shadowRoot.dispatchEvent(new Event('driehoekClick', {composed: true}));
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
    }

    setState(key, value) {
        this.state[key] = value;
        this.updateBinding(key);
    }

    updateBinding(prop) {
        let bindings = this.shadowRoot.querySelectorAll(`[data-bind$="${prop}"]`);

        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        bindings.forEach(node => {
            node.textContent = this.state[prop];
        })
    }

    applyEventlisteners(){
        this.addEventListener('click', this.sendEvent);
    }

    sendEvent(){
        this.shadowRoot.dispatchEvent(new Event('driehoekClick', {composed: true}));
    }

}

customElements.define('click-driehoek', Driehoek);

export {Driehoek};
