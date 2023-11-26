class MyContent extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <section>
    <h3>Historia</h3>
    <p>Lamborghini, la icónica marca de automóviles de lujo, tiene una fascinante historia que se remonta a la década de 1960. Fundada por Ferruccio Lamborghini, un exitoso fabricante de tractores y empresario italiano, la marca nació de su descontento con algunos aspectos de los automóviles Ferrari que poseía. Ferruccio decidió desafiar a las marcas establecidas creando sus propios automóviles de alto rendimiento.</p>
    <p>En 1963, Lamborghini lanzó su primer automóvil, el Lamborghini 350 GT, impresionando al mundo con su diseño elegante y su potente motor V12. A este le siguió el Miura en 1966, un superdeportivo revolucionario que estableció nuevos estándares en términos de velocidad y estilo. A lo largo de los años, Lamborghini continuó innovando con modelos legendarios como el Countach, Diablo y Murciélago, cada uno de los cuales dejó una marca indeleble en la historia del automovilismo de lujo.</p>
    <p style=" text-align: center;"><img src="img/lambo.jpg" height="300px" width="680px"></p>
    <p>A pesar de enfrentar desafíos económicos en varias etapas, Lamborghini se ha mantenido como una fuerza líder en el mundo de los superdeportivos, combinando la artesanía italiana con tecnología de vanguardia. La marca se ha destacado por su diseño audaz y características de rendimiento excepcionales, convirtiéndose en un símbolo de estatus y velocidad. Con su compromiso con la excelencia y la innovación, Lamborghini continúa siendo una leyenda en la industria automotriz, emocionando a entusiastas de los automóviles en todo el mundo con cada nuevo modelo que presenta.</p>
    <p>&nbsp;</p>
    </section>
    `;
    }
    }
    customElements.define('my-content', MyContent);
    