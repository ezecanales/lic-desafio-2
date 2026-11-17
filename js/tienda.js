// Datos de ejemplo mientras se conecta el JSON de productos
const productosEjemplo = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  titulo: "Producto",
  precio: 99,
  descripcion: "Regular Text - Lorem ipsum dolor sit amet, consectetur",
  detalle: "Regular Text - Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  etiqueta: "Tag name",
  etiquetaDetalle: "Descuento",
  calificacion: 3
}));

const carritoEjemplo = [
  { titulo: "Producto 1", precio: 50.99, cantidad: 1 },
  { titulo: "Producto 2", precio: 10.99, cantidad: 2 }
];

const Tienda = {
  productos: productosEjemplo,
  carrito: carritoEjemplo,

  iniciar() {
    this.mostrarProductos();
    this.agregarEventos();
  },

  formatoPrecio(valor) {
    return `$${valor.toFixed(2)}`;
  },

  mostrarProductos() {
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = "";

    this.productos.forEach((producto) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";
      tarjeta.innerHTML = `
        <div class="imagen-vacia imagen-vacia--tarjeta"></div>
        <div class="tarjeta__cabecera">
          <h3 class="tarjeta__titulo">${producto.titulo}</h3>
          <span class="tarjeta__precio"><sup>$</sup>${producto.precio}</span>
        </div>
        <p class="tarjeta__descripcion">${producto.descripcion}</p>
        <div class="tarjeta__pie">
          <span class="etiqueta">${producto.etiqueta}</span>
          <button type="button" class="boton boton--oscuro boton--chico" data-id="${producto.id}">Detalles</button>
        </div>
      `;
      lista.appendChild(tarjeta);
    });
  },

  agregarEventos() {
    document.getElementById("listaProductos").addEventListener("click", (evento) => {
      const boton = evento.target.closest("[data-id]");
      if (boton) {
        this.abrirDetalle(Number(boton.dataset.id));
      }
    });

    document.getElementById("btnCarrito").addEventListener("click", () => this.abrirCarrito());

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (evento) => {
        // Cierra con los botones de cerrar o al hacer clic fuera de la caja
        if (evento.target === modal || evento.target.closest("[data-cerrar]")) {
          this.cerrarModal(modal);
        }
      });
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        document.querySelectorAll(".modal:not([hidden])").forEach((modal) => this.cerrarModal(modal));
      }
    });
  },

  abrirDetalle(id) {
    const producto = this.productos.find((p) => p.id === id);
    if (!producto) {
      return;
    }

    document.getElementById("detalleTitulo").textContent = producto.titulo;
    document.getElementById("detallePrecio").textContent = `$ ${producto.precio}`;
    document.getElementById("detalleDescripcion").textContent = producto.detalle;
    document.getElementById("detalleEtiqueta").textContent = producto.etiquetaDetalle;
    document.getElementById("detalleEstrellas").innerHTML = this.crearEstrellas(producto.calificacion);

    this.abrirModal(document.getElementById("modalDetalle"));
  },

  crearEstrellas(calificacion) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
      const clase = i <= Math.round(calificacion) ? "estrella llena" : "estrella";
      estrellas += `<span class="${clase}">&#9733;</span>`;
    }
    return estrellas;
  },

  abrirCarrito() {
    const cuerpo = document.getElementById("cuerpoCarrito");
    cuerpo.innerHTML = "";

    this.carrito.forEach((item) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${item.titulo}</td>
        <td>${this.formatoPrecio(item.precio)}</td>
        <td>${item.cantidad}</td>
        <td>${this.formatoPrecio(item.precio * item.cantidad)}</td>
      `;
      cuerpo.appendChild(fila);
    });

    // Fila vacía que estira la tabla como en el diseño
    const relleno = document.createElement("tr");
    relleno.className = "tabla-carrito__relleno";
    relleno.innerHTML = "<td></td><td></td><td></td><td></td>";
    cuerpo.appendChild(relleno);

    document.getElementById("totalModal").textContent = this.formatoPrecio(this.calcularTotal());
    this.abrirModal(document.getElementById("modalCarrito"));
  },

  calcularTotal() {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  },

  abrirModal(modal) {
    modal.hidden = false;
    document.body.classList.add("sin-scroll");
  },

  cerrarModal(modal) {
    modal.hidden = true;
    if (!document.querySelector(".modal:not([hidden])")) {
      document.body.classList.remove("sin-scroll");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Tienda.iniciar();
});
