/**/
var usuarioActual;
var nPacis;
var posicion;
var selectedItems;
var stock;
var check;
var temp;


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

//funcion para abrir formulario de estudiante
function FuncionAgregarEstudiante(){
      setTimeout("location='formulario.html'")
}

//funcion para abrir formulario de nueva carrera
function FuncionAgregarCarrera(){
      setTimeout("location='agregar.html'")
}

//funcion para abrir formulario de editar carrera
function FuncionEditarCarrera(){
      estudianteEditar=[];      
      temp = JSON.parse(localStorage.getItem('ArregloCarreras'))[($("input:checked").attr("id"))];
      localStorage.setItem('estudianteEditar',JSON.stringify(temp));
      ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'))  
      delete ArregloCarreras[$("input:checked").attr("id")];
      ArregloCarreras = ArregloCarreras.filter(Boolean);
      localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
      setTimeout("location='editar.html'")
}

//funcion para volvernos a la pag anterior
function FuncionVolver(){
      window.history.back();
}

function cerrarEdicionCarrera(){
      salvarCarrera();
      localStorage.removeItem("estudianteEditar");
      window.history.back();
}

//se usa para almacenar un estudiante en un arreglo
function salvarEstudiante() {
    // obtener datos del form
    var nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellido').value,
        cedula = document.getElementById('cedula').value,
        nPais = document.getElementById("pais").options[document.getElementById("pais").options.selectedIndex].text; //extrae valor de select;
       

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

//se usa para almacenar un estudiante en un arreglo
function salvarCarrera() {
    // obtener datos del form
    var nombre = document.getElementById('nombre').value,
        creditos = document.getElementById('creditos').value,
        codigoCarrera = document.getElementById('codigoCarrera').value; 
       
    // crear objeto Carrera
    var carrera = { "nombre": nombre, "creditos": creditos, "codigoCarrera": codigoCarrera };
    
    // leer los estudiantes de localstorage
    var ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'));
    if (ArregloCarreras === null) {
        ArregloCarreras = [];
    }

    // agregar el Carrera
    ArregloCarreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
    localStorage.removeItem("estudianteEditar");
    location.reload(true);
}

//se usa para llenar el select con datos del local storage
function llenarSelect(){
    var carrera = document.getElementById("Estado"); /* Para no tener que llamar a cada rato a getElementById */
    var ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'));
      for(var i=0;i<ArregloCarreras.length;i++){ 
        carrera.options[i] = new Option(ArregloCarreras[i].nombre);
       }
  }

//funcion para setear datos a la tabla dinamicamente
function crearTablax() {
  //Se declaran variables locales
  var oTHead = oTable.createTHead();
  var oRow, oCell;
  var i, j;

  //Se declaran los arreglos 
  var heading = new Array();
  var stock  =  new Array();
  var number = -1;
 // check = "<input type='checkbox' id='number'>"
  

  //Se asignan valor al arreglo 
  heading[0] = "Nombre carrera";
  heading[1] = "Cantidad de creditos";
  heading[2] = "Codigo de carrera";
  heading[3] = "Seleccionar"
  
  //Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloCarreras')).length ; i++){
        stock[i] = JSON.parse(localStorage.getItem('ArregloCarreras'))[i]
        number++;
        check = "<input type='radio' name='opciones' id= '"+number+"'>"
        stock[i] = new Array (stock[i].nombre,stock[i].creditos,stock[i].codigoCarrera, check )
        
  };

  // Se define el ingreso de filas a la cabecera
  oRow = oTHead.insertRow(-1);
  oTHead.setAttribute("bgColor","lightskyblue");

  // Insert cells into the header row.
  for (i=0; i<heading.length; i++){
    oCell = oRow.insertCell(-1);
    oCell.align = "center";
    oCell.style.fontWeight = "bold";
    oCell.innerHTML = heading[i]; 
  }

  // Insert rows and cells into bodies.
  for (i=0; i<stock.length; i++){ 
    oRow = oTBody0.insertRow(-1);  //acomoda arreglo de atras hacia adelante
    for (j=0; j<stock[i].length; j++){
      oCell = oRow.insertCell(-1);
      oCell.innerHTML = stock[i][j];      
    }
  }
   // Establece colores de los cuerpos de la tabla
  oTBody0.setAttribute("bgColor","#FF33FF");
}

//Elimina Carreras de localStorage-Carrera
function FuncionEliminarCarreras(){
  //convertimos el objeto 
  ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'))
  
  alert("El estudiante " + ArregloCarreras[($("input:checked").attr("id"))].nombre +" fue eliminado exitosante");
  
  //eliminamos el objeto deseado 
  delete ArregloCarreras[$("input:checked").attr("id")];
  
  //filtramos Undefinade y se eliminan
  ArregloCarreras = ArregloCarreras.filter(Boolean);
  
  //guardamos la cadena nueva
  localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
  
  location.reload(true);
}

//carga datos de Carrera seleccionada de localStorage-Carrera
function FuncionGuardarEdicionCarrera(){
  //convertimos el objeto 
  estudianteEditar = JSON.parse(localStorage.getItem('estudianteEditar'))
  document.getElementById("nombre").value = estudianteEditar.nombre;
  document.getElementById("creditos").value = estudianteEditar.creditos;
  document.getElementById("codigoCarrera").value = estudianteEditar.codigoCarrera;
}

function salvarCarreraEditada() {
    // obtener datos del form
    var nombre = document.getElementById('nombre').value,
        creditos = document.getElementById('creditos').value,
        codigoCarrera = document.getElementById('codigoCarrera').value; 
       
    // crear objeto Carrera
    var carrera = { "nombre": nombre, "creditos": creditos, "codigoCarrera": codigoCarrera };
    
    // leer los estudiantes de localstorage
    var ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'));
    if (ArregloCarreras === null) {
        ArregloCarreras = [];
    }

    // agregar el Carrera
    ArregloCarreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
    localStorage.removeItem("estudianteEditar");
    window.history.back();
}




























function checkbox(){
$(document).ready(function(){
    var selected = '';
    selectedItems = []; 
    $(" input:checkbox:checked").each(function(){
     if (this.checked) {
                selected += $(this).val() ;
                selectedItems.push([$(this).val()]); 
            }
    });    
    alert('Has seleccionado: '+selected);  
    localStorage.setItem('selectedItems',JSON.stringify(selectedItems));
});
}





//se usa para extraer elementos de un select
function extraeSelectPais(){
  var posicion=document.getElementById("pais").options.selectedIndex; //posicion
  nPais = document.getElementById("pais").options[posicion].text; //valor
  alert(nPais);
}


function checkboxxxx(){
$(document).ready(function(){
    selectedItems = [];    
    $("input:checkbox:checked").each(function(){
      selectedItems.push($(this).value);
    });    
    localStorage.setItem('selectedItems',JSON.stringify(selectedItems));    
});
}
