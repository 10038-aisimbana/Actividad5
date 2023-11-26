class MyHeader extends HTMLElement {
    constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <header>
    <h2><img src="img/logo.png" height="60px" width="110px">Lamborghini</h2>
    <p>&nbsp;</p>
    </header>
    
    `;
    }
    }
    customElements.define('my-header', MyHeader);