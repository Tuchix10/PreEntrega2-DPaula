const tab = document.getElementById("tab");
let libreria = [];

class Libro {
    constructor( titulo , autor , editorial , año , codigo) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anno = año;
        this.codigo = codigo;
    }
}

function validarFormulario(titulo , autor , editorial , anno , codigo) {
    if (titulo == "" || autor == "" || editorial == "" || anno == "" || codigo == "" ) {
        alert (`Por favor llenar todos los campos es obligatorio`)
        return false;
    }
    return true;
}

function validarAño(anno) {
    if (!isNaN(anno) && anno <= 2023)  {
        return true;
    }
    alert(`Solo se puede introducir valores númericos y el limite es 2023`);
    return false;
}

function registrarLibro() {
    let tituloNormal = document.getElementById("titulo").value;
    let titulo = tituloNormal.toLowerCase();
    let autorNormal = document.getElementById("autor").value;
    let autor = autorNormal.toLowerCase();
    let editorialNormal = document.getElementById("editorial").value;
    let editorial = editorialNormal.toLowerCase();
    let anno = document.getElementById("año").value;
    let codigo = document.getElementById("codigo").value;
    if (validarAño(anno) && validarFormulario(titulo , autor , editorial , anno , codigo)) {
        libreria.push(new Libro ( titulo , autor , editorial , anno , codigo ));
        alert(`Libro registrado con exito`);
    }
}

function agregarFila() {
    for( let libro of libreria) {
        tab.innerHTML = tab.innerHTML +
        `<tr>
            <td>${(libro.titulo)}</td>
            <td>${(libro.autor)}</td>
            <td>${(libro.editorial)}</td>
            <td>${(libro.anno)}</td>
            <td>${(libro.codigo)}</td>
        </tr>`;
    }
}

function generarTabla() {
    tab.innerHTML = "";
    agregarFila();
}

function validarBusqueda(titulo , autor , editorial , anno , codigo) {
    if (titulo) {
        let libreriaFiltrada = libreria.filter(Libro => Libro.titulo === titulo);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (autor) {
        let libreriaFiltrada = libreria.filter(Libro => Libro.autor === autor);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (editorial) {
        let libreriaFiltrada = libreria.filter(Libro => Libro.editorial === editorial);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (anno) {
        let libreriaFiltrada = libreria.filter(Libro => Libro.anno === anno);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (codigo) {
        let libreriaFiltrada = libreria.filter(Libro => Libro.codigo === codigo);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    alert(`Por favor ingrese algún parametro para la busqueda`);
    return false;
}

function busqueda() {
    let tituloNormal = document.getElementById("titulo-busqueda").value;
    let titulo = tituloNormal.toLowerCase();
    let autorNormal = document.getElementById("autor-busqueda").value;
    let autor = autorNormal.toLowerCase();
    let editorialNormal = document.getElementById("editorial-busqueda").value;
    let editorial = editorialNormal.toLowerCase();
    let anno = document.getElementById("año-busqueda").value;
    let codigo = document.getElementById("codigo-busqueda").value;
    validarBusqueda(titulo , autor , editorial , anno , codigo);
}

function generarTablaBusqueda(libreriaFiltrada) {
    tab.innerHTML = "";
    for( let libro of libreriaFiltrada) {
        tab.innerHTML = tab.innerHTML +
        `<tr>
            <td>${(libro.titulo)}</td>
            <td>${(libro.autor)}</td>
            <td>${(libro.editorial)}</td>
            <td>${(libro.anno)}</td>
            <td>${(libro.codigo)}</td>
        </tr>`;
    }
}
