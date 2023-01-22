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
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
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

function generarTabla () {
    tab.innerHTML = "";
    agregarFila();
}

function consultar() {
    console.log(libreria);
}




