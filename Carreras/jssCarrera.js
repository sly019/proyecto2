/**/
var check;
var temp;


//asigna nombre de usuario actual
function asignarUsuario(){
      usuarioActual = localStorage.getItem('nombre');
      document.getElementById("nombreUsuario").value = usuarioActual;
}

//funcion para abrir formulario de nueva carrera
function FuncionAgregarCarrera(){
    setTimeout("location='agregar.html'")
}

//funcion para abrir formulario de ver carrera
function FuncionVerCarrera(){
    if ((($("input:checked").attr("id")) != undefined)) {
      CarreraEditar=[];      
      temp = JSON.parse(localStorage.getItem('ArregloCarreras'))[($("input:checked").attr("id"))];
      localStorage.setItem('CarreraEditar',JSON.stringify(temp));
      ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'))  
      delete ArregloCarreras[$("input:checked").attr("id")];
      ArregloCarreras = ArregloCarreras.filter(Boolean);
      localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
      setTimeout("location='ver.html'");
    }else
      alert("Seleccione una carrera");    
}

//funcion para abrir formulario de editar carrera
function FuncionEditarCarrera(){
    if ((($("input:checked").attr("id")) != undefined)) {
      CarreraEditar=[];      
      temp = JSON.parse(localStorage.getItem('ArregloCarreras'))[($("input:checked").attr("id"))];
      localStorage.setItem('CarreraEditar',JSON.stringify(temp));
      ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'))  
      delete ArregloCarreras[$("input:checked").attr("id")];
      ArregloCarreras = ArregloCarreras.filter(Boolean);
      localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
      setTimeout("location='editar.html'");
    }else
      alert("Seleccione una carrera");    
}

//carga datos de Carrera seleccionada de localStorage-Carrera
function FuncionGuardarEdicionCarrera(){
  //convertimos el objeto 
  CarreraEditar = JSON.parse(localStorage.getItem('CarreraEditar'))
  document.getElementById("nombre").value = CarreraEditar.nombre;
  document.getElementById("creditos").value = CarreraEditar.creditos;
  document.getElementById("codigoCarrera").value = CarreraEditar.codigoCarrera;
}

//salva la edicion de la carrera
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
    localStorage.removeItem("CarreraEditar");
    window.history.back();
}

//funcion para volvernos a la pag anterior
function FuncionVolver(){
  window.history.back();
}

function cerrarEdicionCarrera(){
      salvarCarrera();
      localStorage.removeItem("CarreraEditar");
      window.history.back();
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
    localStorage.removeItem("CarreraEditar");
    window.history.back();
}

//se usa para llenar el select con datos del local storage para carreras a estudiante
function llenarSelectCarreras(){
    var Carrera = document.getElementById("Carrera"); /* Para no tener que llamar a cada rato a getElementById */
    var llenarSelect = JSON.parse(localStorage.getItem('ArregloCarreras'));
      for(var i=0;i<llenarSelect.length;i++){ 
        Carrera.options[i] = new Option(llenarSelect[i].nombre);
       }
}

//funcion para setear datos a la tabla dinamicamente
function crearTablaCarrera() {
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
  oTHead.setAttribute("bgColor","#000066");

  // Insert cells into the header row.
  for (i=0; i<heading.length; i++){
    oCell = oRow.insertCell(-1);
    oCell.align = "center";
    oCell.style.fontWeight = "bold";
    oCell.style.color = "white";
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
  oTBody0.setAttribute("bgColor","#999999");
  oTBody0.style.fontWeight = "bold";
}

//Elimina Carreras de localStorage-Carrera
function FuncionEliminarCarreras(){
  if ((($("input:checked").attr("id")) != undefined)) {
    //convertimos el objeto 
  ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'))
  
  alert("La carrera " + ArregloCarreras[($("input:checked").attr("id"))].nombre +" fue eliminado exitosante");
  
  //eliminamos el objeto deseado 
  delete ArregloCarreras[$("input:checked").attr("id")];
  
  //filtramos Undefinade y se eliminan
  ArregloCarreras = ArregloCarreras.filter(Boolean);
  
  //guardamos la cadena nueva
  localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));  
  location.reload(true);
  }else
      alert("Seleccione una carrera");  
}



























































function checkbox(){

  //Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloCarreras')).length ; i++){
        stock[i] = JSON.parse(localStorage.getItem('ArregloCarreras'))[i]
        var elOptNew = document.createElement('option');
   elOptNew.text = stock[i].nombre;
   elOptNew.value = stock[i].nombre;
      Carrera.add(elOptNew, null); // Modo estándar, que no funciona en IE
  };

}

//se usa para extraer elementos de un select
function extraeSelectPais(){
  var posicion=document.getElementById("Carrera").options.selectedIndex; //posicion
  carrera = document.getElementById("Carrera").options[posicion].text; //valor
  alert(carrera);
}

function checkbotx(){
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

function checkboxxxx(){
$(document).ready(function(){
    selectedItems = [];    
    $("input:checkbox:checked").each(function(){
      selectedItems.push($(this).value);
    });    
    localStorage.setItem('selectedItems',JSON.stringify(selectedItems));    
});
}
