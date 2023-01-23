const tab = document.getElementById("tab");
const biblioteca = validarBaseDeDatos();

class Libro {
    constructor( titulo , autor , editorial , año , codigo) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anno = año;
        this.codigo = codigo;
    }
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

function validarBaseDeDatos() {
    if (localStorage.length != 0) {
        return libreria = JSON.parse(localStorage.getItem("libreria"))
    }
    return libreria = [];
}

function registrarLibro() {
    let tituloNormal = removeAccents(document.getElementById("titulo").value);
    let titulo = tituloNormal.toLowerCase();
    let autorNormal = removeAccents(document.getElementById("autor").value);
    let autor = autorNormal.toLowerCase();
    let editorialNormal = removeAccents(document.getElementById("editorial").value);
    let editorial = editorialNormal.toLowerCase();
    let anno = document.getElementById("año").value;
    let codigo = document.getElementById("codigo").value;
    if (validarAño(anno) && validarFormulario(titulo , autor , editorial , anno , codigo)) {
        biblioteca.push(new Libro ( titulo , autor , editorial , anno , codigo ));
        localStorage.setItem( "libreria" , JSON.stringify(libreria));
        alert(`Libro registrado con exito`);
    }
}

function agregarFila() {
    for( let libro of JSON.parse(localStorage.getItem("libreria"))) {
        tab.innerHTML = tab.innerHTML +
        `<tr>
            <td>${(libro.titulo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
            <td>${(libro.autor.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
            <td>${(libro.editorial.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
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
        let libreriaFiltrada = biblioteca.filter(x => (x.titulo === titulo));
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (autor) {
        let libreriaFiltrada = biblioteca.filter(x => x.autor === autor);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (editorial) {
        let libreriaFiltrada = biblioteca.filter(x => x.editorial === editorial);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (anno) {
        let libreriaFiltrada = biblioteca.filter(x => x.anno === anno);
        if (libreriaFiltrada.length === 0) {
            alert(`Su busqueda no produjo resultados`);
        }
        generarTablaBusqueda(libreriaFiltrada)
        return true
    }
    if (codigo) {
        let libreriaFiltrada = biblioteca.filter(x => x.codigo === codigo);
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
    let tituloNormal = removeAccents(document.getElementById("titulo-busqueda").value);
    let titulo = tituloNormal.toLowerCase();
    let autorNormal = removeAccents(document.getElementById("autor-busqueda").value);
    let autor = autorNormal.toLowerCase();
    let editorialNormal = removeAccents(document.getElementById("editorial-busqueda").value);
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
            <td>${(libro.titulo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
            <td>${(libro.autor.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
            <td>${(libro.editorial.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))}</td>
            <td>${(libro.anno)}</td>
            <td>${(libro.codigo)}</td>
        </tr>`;
    }
}

function limpiarMemoria() {
    tab.innerHTML = "";
    localStorage.clear();
}
