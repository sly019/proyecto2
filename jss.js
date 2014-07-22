
function Funcion_eliminar() {
    if (confirm('Desea borrar el estudiante seleccionado??')) {
        alert('Estudiante borrado exitosamente');
        document.location.href='../Estudiantes/estudiante.html';
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}

function Funcion_eliminar_carrera() {
    if (confirm('Desea borrar la carrera seleccionada??')) {
        alert('Carrera borrada exitosamente');
        document.location.href='../Carreras/carrera.html';
    } else {
        document.location.href='../Carreras/carrera.html';
    }
}

function Funcion_eliminar_usser() {
    if (confirm('Desea borrar el usuario seleccionado??')) {
        alert('Usuario borrado exitosamente');
        document.location.href='../Usuarios/usuario.html';
    } else {
        document.location.href='../Usuarios/usuario.html';
    }
}

function Funcion_agregar() {
    if (confirm('Desea agregar un estudiante nuevo??')) {
       open("../Estudiantes/formulario.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}

function Funcion_agregar_carrera() {
    if (confirm('Desea agregar una carrera nueva??')) {
       open("../Carreras/agregar.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
    } else {
        document.location.href='../Carreras/carrera.html';
    }
}

function Funcion_agregar_usser() {
    if (confirm('Desea agregar un usuario nuevo??')) {
       open("../Usuarios/agregar.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
    } else {
        document.location.href='../Usuarios/usuario.html';
    }
}

function Funcion_ver() {
    if (confirm('Desea ver el estudiante seleccionado??')) {
       open("../Estudiantes/ver.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}

function Funcion_proyecto() {
    open("../Estudiantes/proyecto.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes"); 
}

function Funcion_cancelar() {
        window.close();
}

function Funcion_agregar_est() {
    alert  ("Se agregó el estudiante correctamente")
    window.close();
}

function Funcion_editar_fin() {
    alert("Se editó el estudiante correctamente")
    window.close();
}

function Funcion_editar_est() {   
    open("../Estudiantes/edicion.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");
}

function Funcion_agregar_proy() {
    alert  ("Se agregó el proyecto correctamente")
    open("../Estudiantes/formulario.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
}

function Funcion_editar_proy() {
    open("../Estudiantes/proyecto_editar.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
}

function Funcion_guard_edicion() {    
       open("../Estudiantes/ver_salir.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");   
}

function Funcion_agregada_carrera() {
    alert  ("Se agregó la carrera correctamente")
        window.close();
}


function Funcion_ver_carrera() {
       open("../Carreras/ver.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;  
}

function Funcion_editar_carrera() {
       open("../Carreras/edicion.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;  
}

function Funcion_agregada_usser() {
    alert  ("Se agregó el usuario correctamente")
      window.close();
}

function Funcion_ver_usser() {
       open("../Usuarios/ver.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;  
}

function Funcion_editar_usser() {
       open("../Usuarios/edicion.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;  
}
