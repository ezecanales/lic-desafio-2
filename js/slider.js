// Slider de imágenes de la página principal
const Slider = {
  contenedor: null,
  items: [],
  puntos: [],
  indice: 0,
  intervalo: null,
  tiempo: 4000,

  iniciar(idContenedor) {
    this.contenedor = document.getElementById(idContenedor);
    if (!this.contenedor) {
      return;
    }

    this.items = Array.from(this.contenedor.querySelectorAll(".slider__item"));
    if (this.items.length === 0) {
      return;
    }

    this.crearPuntos();
    this.agregarEventos();
    this.mostrar(0);
    this.reproducir();
  },

  crearPuntos() {
    const zonaPuntos = this.contenedor.querySelector(".slider__puntos");

    this.items.forEach((item, posicion) => {
      const punto = document.createElement("button");
      punto.type = "button";
      punto.className = "slider__punto";
      punto.setAttribute("aria-label", `Ir a la imagen ${posicion + 1}`);
      punto.addEventListener("click", () => {
        this.mostrar(posicion);
        this.reiniciar();
      });
      zonaPuntos.appendChild(punto);
      this.puntos.push(punto);
    });
  },

  agregarEventos() {
    this.contenedor.querySelectorAll(".slider__flecha").forEach((flecha) => {
      flecha.addEventListener("click", () => {
        if (flecha.dataset.accion === "anterior") {
          this.anterior();
        } else {
          this.siguiente();
        }
        this.reiniciar();
      });
    });

    // Se pausa mientras el mouse está encima
    this.contenedor.addEventListener("mouseenter", () => this.detener());
    this.contenedor.addEventListener("mouseleave", () => this.reproducir());
  },

  mostrar(posicion) {
    const total = this.items.length;
    this.indice = (posicion + total) % total;

    this.items.forEach((item, i) => {
      item.classList.toggle("activo", i === this.indice);
    });
    this.puntos.forEach((punto, i) => {
      punto.classList.toggle("activo", i === this.indice);
    });
  },

  siguiente() {
    this.mostrar(this.indice + 1);
  },

  anterior() {
    this.mostrar(this.indice - 1);
  },

  reproducir() {
    this.detener();
    this.intervalo = setInterval(() => this.siguiente(), this.tiempo);
  },

  detener() {
    clearInterval(this.intervalo);
  },

  reiniciar() {
    this.reproducir();
  }
};

// El slider se inicializa desde tienda.js después de cargar los productos
