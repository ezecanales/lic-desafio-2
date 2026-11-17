const productos = {
  1: {
    title: "Mochila Fjällräven Foldsack n.º 1 para laptops de hasta 15 pulgadas",
    description: "La mochila ideal para el día a día y las caminatas por el bosque. Guarda tu laptop (de hasta 15 pulgadas) en el compartimento acolchado y lleva contigo todo lo que necesitas."
  },
  2: {
    title: "Camiseta casual premium de corte ajustado para hombre",
    description: "Camiseta ligera y suave de corte ajustado, con mangas raglán en contraste y cuello Henley con tres botones. Su confección resistente y cuello redondo ofrecen comodidad para el uso diario y un estilo casual."
  },
  3: {
    title: "Chaqueta de algodón para hombre",
    description: "Una excelente prenda de abrigo para primavera, otoño e invierno. Ideal para trabajar, caminar, acampar, escalar, andar en bicicleta o viajar. También es una buena opción de regalo para familiares."
  },
  4: {
    title: "Prenda casual de corte ajustado para hombre",
    description: "El color puede variar ligeramente entre la pantalla y el producto real. Las medidas pueden variar según la complexión; consulta la información detallada de tallas antes de elegir."
  },
  5: {
    title: "Pulsera de cadena Naga con dragón en oro y plata, John Hardy",
    description: "De la colección Legends, inspirada en el dragón mítico del agua que protege la perla del océano. Llévala hacia adentro como símbolo de amor y abundancia, o hacia afuera como símbolo de protección."
  },
  6: {
    title: "Anillo petite de oro macizo con micropavé",
    description: "Satisfacción garantizada. Puedes devolver o cambiar tu pedido dentro de los 30 días. Diseñado y vendido por Hafeez Center, en Estados Unidos."
  },
  7: {
    title: "Anillo de compromiso tipo solitario con baño de oro blanco",
    description: "Un clásico anillo solitario de diamante para compromiso. Un regalo especial para celebrar compromisos, bodas, aniversarios o San Valentín."
  },
  8: {
    title: "Aretes tipo túnel de acero inoxidable con acabado en oro rosa",
    description: "Aretes expansores tipo túnel con doble abertura y acabado en oro rosa. Fabricados en acero inoxidable 316L."
  },
  9: {
    title: "Disco duro externo portátil WD Elements de 2 TB, USB 3.0",
    description: "Compatible con USB 3.0 y USB 2.0 para transferencias rápidas y gran capacidad. Formateado en NTFS y compatible con Windows 10, 8.1 y 7. Es posible que sea necesario reformatearlo; la compatibilidad depende del equipo y del sistema operativo."
  },
  10: {
    title: "SSD interno SanDisk SSD PLUS de 1 TB, SATA III",
    description: "Una actualización sencilla para acelerar el inicio, el apagado y la apertura de aplicaciones. Ofrece un equilibrio entre rendimiento y confiabilidad, con velocidades de lectura y escritura de hasta 535/450 MB/s. El rendimiento puede variar según el equipo y las aplicaciones."
  },
  11: {
    title: "SSD Silicon Power A55 de 256 GB, 3D NAND y caché SLC",
    description: "La memoria flash 3D NAND ofrece transferencias rápidas y mejora el rendimiento del sistema. La caché SLC aumenta el rendimiento y la vida útil. Su diseño delgado de 7 mm es adecuado para ultrabooks y portátiles delgados. Incluye compatibilidad con TRIM, recolección de basura, RAID y ECC."
  },
  12: {
    title: "Disco duro externo portátil WD de 4 TB para PlayStation 4",
    description: "Amplía el almacenamiento de tu PS4 y juega donde quieras. Es fácil de configurar, tiene un diseño elegante y gran capacidad. Incluye una garantía limitada del fabricante de 3 años."
  },
  13: {
    title: "Monitor Acer SB220Q bi IPS Full HD de 21,5 pulgadas",
    description: "Pantalla panorámica IPS Full HD de 21,5 pulgadas con tecnología Radeon FreeSync. Diseño ultradelgado sin marco, frecuencia de actualización de 75 Hz, respuesta de 4 ms y conexión HDMI. Relación de aspecto 16:9, brillo de 250 nits y ángulos de visión de 178°."
  },
  14: {
    title: "Monitor curvo Samsung CHG90 QLED superultraancho de 49 pulgadas",
    description: "Monitor curvo superultraancho QLED de 49 pulgadas y relación 32:9, con dos áreas de trabajo equivalentes a monitores de 27 pulgadas. Cuenta con tecnología Quantum Dot, HDR y calibración de fábrica. Su frecuencia de 144 Hz y respuesta de 1 ms ayudan a reducir el desenfoque y el retraso de entrada."
  },
  15: {
    title: "Chaqueta de snowboard 3 en 1 para mujer",
    description: "Chaqueta de poliéster con forro polar cálido, extraíble y suave al contacto con la piel. Tiene cuello alto, capucha y puños ajustables, dos bolsillos para las manos, dos en el pecho y uno interior. Su diseño desmontable permite usar las capas juntas o por separado en distintas temporadas."
  },
  16: {
    title: "Chaqueta motera de cuero sintético con capucha desmontable",
    description: "Chaqueta de cuero sintético con forro de poliéster y detalles de algodón. Incluye dos bolsillos delanteros, capucha desmontable, botones en la cintura y costuras decorativas laterales. Lavar a mano; no usar blanqueador, secadora ni plancha."
  },
  17: {
    title: "Impermeable cortavientos a rayas para mujer",
    description: "Prenda ligera para viajes o uso casual, con mangas largas, capucha y cintura ajustable con cordón. Tiene cierre frontal de botones y cremallera, forro a rayas, dos bolsillos laterales y capucha forrada de algodón con cordones ajustables."
  },
  18: {
    title: "Blusa de manga corta y cuello barco para mujer",
    description: "Confeccionada con 95 % rayón y 5 % elastano. Fabricada en Estados Unidos o importada. Su tela ligera y elástica brinda comodidad; tiene acabado acanalado en las mangas y el escote, y costura doble en el dobladillo."
  },
  19: {
    title: "Camiseta deportiva de manga corta para mujer",
    description: "Confeccionada en poliéster ligero y transpirable, con tela que ayuda a evacuar la humedad. Es lavable a máquina y preencogida. Su cuello en V, corte cómodo y silueta ligeramente ajustada ofrecen comodidad y un estilo femenino."
  },
  20: {
    title: "Camiseta casual de algodón de manga corta para mujer",
    description: "Camiseta casual de 95 % algodón y 5 % elastano, con manga corta, cuello en V y estampado de letras. Suave y ligeramente elástica. Adecuada para la oficina, la playa, la escuela, el hogar o la calle, durante cualquier temporada."
  }
};

const categorias = {
  "men's clothing": "Ropa de hombre",
  "women's clothing": "Ropa de mujer",
  jewelery: "Joyería",
  electronics: "Electrónica"
};

const Tienda = {
  productos: [],
  carrito: [],
  filtros: {
    categoria: "",
    texto: ""
  },

  async iniciar() {
    this.agregarEventos();
    this.renderizarCarrito();
    this.actualizarTotalesCarrito();
    await this.cargarProductos();
  },

  async cargarProductos() {
    const lista = document.getElementById("listaProductos");

    try {
      const respuesta = await fetch("products.json");
      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status} al cargar products.json`);
      }

      const datos = await respuesta.json();
      if (!Array.isArray(datos)) {
        throw new Error("El archivo products.json debe contener una lista de productos");
      }

      this.productos = datos.map((producto) => ({
        ...producto,
        ...productos[producto.id],
        category: categorias[producto.category] || producto.category
      }));
      this.cargarCategorias();
      this.mostrarProductos();
    } catch (error) {
      console.error("No se pudo cargar el catálogo de productos:", error);
      lista.textContent = "No se pudo cargar el catálogo. Verifica products.json y vuelve a intentarlo.";
      lista.setAttribute("role", "alert");
    }
  },

  cargarCategorias() {
    const selector = document.getElementById("selectorCategoria");
    if (!selector) {
      return;
    }

    const categorias = ["", ...new Set(this.productos.map((producto) => producto.category))];
    selector.innerHTML = "<option value=\"\">Categoría</option>";

    categorias.slice(1).forEach((categoria) => {
      const opcion = document.createElement("option");
      opcion.value = categoria;
      opcion.textContent = categoria;
      selector.appendChild(opcion);
    });

    selector.value = this.filtros.categoria || "";
    this.actualizarNombreCategoria();
  },

  actualizarNombreCategoria() {
    const nombreCategoria = document.getElementById("nombreCategoria");
    if (!nombreCategoria) {
      return;
    }

    nombreCategoria.textContent = this.filtros.categoria || "Todos";
  },

  getProductosFiltrados() {
    const texto = this.filtros.texto.trim().toLowerCase();

    return this.productos.filter((producto) => {
      const coincideCategoria = !this.filtros.categoria || producto.category === this.filtros.categoria;
      const nombre = (producto.title || "").toLowerCase();
      const coincideTexto = !texto || nombre.includes(texto);
      return coincideCategoria && coincideTexto;
    });
  },

  formatoPrecio(valor) {
    return `$${Number(valor).toFixed(2)}`;
  },

  mostrarProductos() {
    const lista = document.getElementById("listaProductos");
    if (!lista) {
      return;
    }

    const productosFiltrados = this.getProductosFiltrados();
    lista.innerHTML = "";

    if (productosFiltrados.length === 0) {
      const vacio = document.createElement("p");
      vacio.className = "productos__vacio";
      vacio.textContent = "No se encontraron productos con esos filtros.";
      lista.appendChild(vacio);
      this.actualizarNombreCategoria();
      return;
    }

    productosFiltrados.forEach((producto) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";

      const contenedorImagen = document.createElement("div");
      contenedorImagen.className = "imagen-vacia imagen-vacia--tarjeta";
      const imagen = document.createElement("img");
      imagen.src = producto.image;
      imagen.alt = producto.title;
      imagen.loading = "lazy";
      contenedorImagen.appendChild(imagen);

      const cabecera = document.createElement("div");
      cabecera.className = "tarjeta__cabecera";
      const titulo = document.createElement("h3");
      titulo.className = "tarjeta__titulo";
      titulo.textContent = producto.title;
      const precio = document.createElement("span");
      precio.className = "tarjeta__precio";
      precio.innerHTML = `<sup>$</sup>${Number(producto.price).toFixed(2)}`;
      cabecera.append(titulo, precio);

      const descripcion = document.createElement("p");
      descripcion.className = "tarjeta__descripcion";
      const descripcionCompleta = producto.description || "";
      descripcion.textContent = descripcionCompleta.length > 100
        ? `${descripcionCompleta.slice(0, 100).trimEnd()}...`
        : descripcionCompleta;

      const pie = document.createElement("div");
      pie.className = "tarjeta__pie";
      const etiqueta = document.createElement("span");
      etiqueta.className = "etiqueta";
      etiqueta.textContent = producto.category;
      const botonDetalles = document.createElement("button");
      botonDetalles.type = "button";
      botonDetalles.className = "boton boton--oscuro boton--chico";
      botonDetalles.dataset.id = producto.id;
      botonDetalles.textContent = "Detalles";
      pie.append(etiqueta, botonDetalles);

      tarjeta.append(contenedorImagen, cabecera, descripcion, pie);
      lista.appendChild(tarjeta);
    });

    this.actualizarNombreCategoria();
  },

  agregarEventos() {
    const listaProductos = document.getElementById("listaProductos");
    if (listaProductos) {
      listaProductos.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-id]");
        if (boton) {
          this.abrirDetalle(Number(boton.dataset.id));
        }
      });
    }

    const buscador = document.getElementById("buscador");
    if (buscador) {
      buscador.addEventListener("input", (evento) => {
        this.filtros.texto = evento.target.value;
        this.mostrarProductos();
      });
    }

    const selectorCategoria = document.getElementById("selectorCategoria");
    if (selectorCategoria) {
      selectorCategoria.addEventListener("change", (evento) => {
        this.filtros.categoria = evento.target.value;
        this.mostrarProductos();
      });
    }

    const botonCarrito = document.getElementById("btnCarrito");
    if (botonCarrito) {
      botonCarrito.addEventListener("click", () => this.abrirCarrito());
    }

    const botonAgregar = document.getElementById("btnAgregar");
    if (botonAgregar) {
      botonAgregar.addEventListener("click", () => {
        const id = Number(botonAgregar.dataset.id || 0);
        if (!id) {
          return;
        }

        this.agregarAlCarrito(id);
        this.cerrarModal(document.getElementById("modalDetalle"));
      });
    }

    const botonPagar = document.getElementById("btnPagar");
    if (botonPagar) {
      botonPagar.addEventListener("click", () => this.pagarCarrito());
    }

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (evento) => {
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

    const detalleTitulo = document.getElementById("detalleTitulo");
    const detallePrecio = document.getElementById("detallePrecio");
    const detalleDescripcion = document.getElementById("detalleDescripcion");
    const detalleEtiqueta = document.getElementById("detalleEtiqueta");
    const detalleEstrellas = document.getElementById("detalleEstrellas");
    const detalleImagen = document.getElementById("detalleImagen");
    const botonAgregar = document.getElementById("btnAgregar");

    detalleTitulo.textContent = producto.title;
    detallePrecio.textContent = this.formatoPrecio(Number(producto.price));
    detalleDescripcion.textContent = producto.description;
    detalleEtiqueta.textContent = producto.category;
    detalleEstrellas.innerHTML = this.crearEstrellas(Number(producto.rating?.rate || 0));

    const imagen = document.createElement("img");
    imagen.src = producto.image;
    imagen.alt = producto.title;
    detalleImagen.replaceChildren(imagen);
    botonAgregar.dataset.id = String(producto.id);

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

  calcularSubtotal(item) {
    return Number(item.precio) * Number(item.cantidad);
  },

  agregarAlCarrito(id) {
    const producto = this.productos.find((item) => item.id === id);
    if (!producto) {
      return;
    }

    const titulo = producto.title;
    const precio = Number(producto.price);
    const itemExistente = this.carrito.find(
      (articulo) => articulo.id === producto.id || articulo.titulo === titulo
    );

    if (itemExistente) {
      itemExistente.cantidad += 1;
      itemExistente.subtotal = this.calcularSubtotal(itemExistente);
    } else {
      this.carrito.push({
        id: producto.id,
        titulo,
        precio,
        cantidad: 1,
        subtotal: precio
      });
    }

    this.actualizarTotalesCarrito();
    this.renderizarCarrito();
  },

  renderizarCarrito() {
    const cuerpo = document.getElementById("cuerpoCarrito");
    const totalModal = document.getElementById("totalModal");
    if (!cuerpo || !totalModal) {
      return;
    }

    cuerpo.innerHTML = "";

    this.carrito.forEach((item) => {
      const subtotal = this.calcularSubtotal(item);
      const fila = document.createElement("tr");

      const celdaTitulo = document.createElement("td");
      celdaTitulo.textContent = item.titulo;

      const celdaPrecio = document.createElement("td");
      celdaPrecio.textContent = this.formatoPrecio(item.precio);

      const celdaCantidad = document.createElement("td");
      celdaCantidad.textContent = String(item.cantidad);

      const celdaSubtotal = document.createElement("td");
      celdaSubtotal.textContent = this.formatoPrecio(subtotal);

      fila.append(celdaTitulo, celdaPrecio, celdaCantidad, celdaSubtotal);
      cuerpo.appendChild(fila);
    });

    const relleno = document.createElement("tr");
    relleno.className = "tabla-carrito__relleno";
    relleno.innerHTML = "<td></td><td></td><td></td><td></td>";
    cuerpo.appendChild(relleno);

    totalModal.textContent = this.formatoPrecio(this.calcularTotal());
  },

  abrirCarrito() {
    this.renderizarCarrito();
    this.abrirModal(document.getElementById("modalCarrito"));
  },

  calcularTotal() {
    return this.carrito.reduce((total, item) => total + this.calcularSubtotal(item), 0);
  },

  actualizarTotalesCarrito() {
    const totalFormateado = this.formatoPrecio(this.calcularTotal());

    const totalCarrito = document.getElementById("totalCarrito");
    if (totalCarrito) {
      totalCarrito.textContent = totalFormateado;
    }

    const totalModal = document.getElementById("totalModal");
    if (totalModal) {
      totalModal.textContent = totalFormateado;
    }
  },

  pagarCarrito() {
    if (this.carrito.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de pagar.");
      return;
    }

    alert("¡Compra realizada con éxito! Gracias por su compra.");
    this.carrito = [];
    this.renderizarCarrito();
    this.actualizarTotalesCarrito();
    this.cerrarModal(document.getElementById("modalCarrito"));
  },

  abrirModal(modal) {
    if (!modal) {
      return;
    }

    modal.hidden = false;
    document.body.classList.add("sin-scroll");
  },

  cerrarModal(modal) {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    if (!document.querySelector(".modal:not([hidden])")) {
      document.body.classList.remove("sin-scroll");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Tienda.iniciar();
});
