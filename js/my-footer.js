class MyFooter extends HTMLElement {
    constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <footer>
    <div style="background-color: #282828; height:200px;" >
    <p>&nbsp;</p>
    <p>Copyright © 2023 Automobili Lamborghini S.p.A. una sociedad unipersonal de Audi Group.</p>

    <p>Todos los derechos reservados. Núm. IVA IT 00591801204</p>
    
    <p>AVISO SOBRE OFERTAS ILEGALES DE SUPUESTAS ACCIONES DE AUTOMOBILI LAMBORGHINI S.P.A.</p>
    
    <p>Automobili Lamborghini S.p.A. ha tenido noticia de que varios terceros de diferentes países están presuntamente ofreciendo acciones de Automobili Lamborghini S.p.A. Estas ofertas son ilegales y no provienen ni de Volkswagen Aktiengesellschaft ni de ninguna de sus filiales.</p>
    </footer>
    <div>
    `;
    }
    }
    customElements.define('my-footer', MyFooter);