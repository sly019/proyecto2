/**/
var usuarioActual;
var nPacis;
var posicion;



//valida el login de inicio
function validarLogin(){
  if (typeof(localStorage) == 'undefined' ) {
    alert('Tu navegador no soporta HTML5');
  } else {
    try {
        if ((document.forms[0].nombre.value == "admin") && (document.forms[0].password.value == "12345") || 
            (document.forms[0].nombre.value == "invitado") && (document.forms[0].password.value == "invitado1")) {
            localStorage.setItem("nombre",document.forms[0].nombre.value); // Guardamos el valor
            localStorage.setItem("password",document.forms[0].password.value); // Guardamos el valor
            setTimeout("location='Inicio/inicio.html'")
        }
        else
            alert("Error de usuario");     
    }catch(e){
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('No podemos almacenar mas contenido');
      }
    }
  }
}


//asigna nombre de usuario actual
function asignarUsuario(){
      usuarioActual = localStorage.getItem('nombre');
      document.getElementById("nombreUsuario").value = usuarioActual;
}


//asigna nombre de usuario actual
function Funcion_agregar(){
      setTimeout("location='formulario.html'")
}


//se usa para almacenar un estudiante en un arreglo
function salvarEstudiante() {
    // obtener datos del form
    var nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellido').value,
        cedula = document.getElementById('cedula').value
        var nPais = document.getElementById("pais").options[document.getElementById("pais").options.selectedIndex].text; //extrae valor de select;

    // crear objeto estudiante
    var estudiante = { "nombre": nombre, "apellido": apellido, "cedula": cedula, "pais": nPais };
    
    // leer los estudiantes de localstorage
    var ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'));
    if (ArregloEstudiantes === null) {
        ArregloEstudiantes = [];
    }

    // agregar el estudiante
    ArregloEstudiantes.push(estudiante);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
}




//se usa para extraer elementos de un select
function extraeSelectPais(){
  var posicion=document.getElementById("pais").options.selectedIndex; //posicion
  nPais = document.getElementById("pais").options[posicion].text; //valor
}

function getRadioButtonSelectedValue()
{
    for(i=0;i<5.length;i++)
        if(document.form_1.genero[i].checked) 
          alert(document.form_1.genero[i]);
}