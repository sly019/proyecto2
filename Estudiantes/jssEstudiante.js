/**/
var imagen;

//carga controles iniciales de Forulario de estudiante
function funcionesEstudiante(){
  llenarSelectCarreras();         
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

//funcion para abrir estudiante
function FuncionAbrirEstudiante(){
  setTimeout("location= '../Estudiantes/estudiante.html'")
}

//funcion para abrir formulario de editar estudiantte                             
function FuncionEditarEstudiante(){
    if ((($("input:checked").attr("id")) != undefined)) { //validacion para seleccion de radio button
        estudianteEditar=[];      
        temp = JSON.parse(localStorage.getItem('ArregloEstudiantes'))[($("input:checked").attr("id"))];
        localStorage.setItem('estudianteEditar',JSON.stringify(temp));
        ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'))  
        delete ArregloEstudiantes[$("input:checked").attr("id")];
        ArregloEstudiantes = ArregloEstudiantes.filter(Boolean);
        localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
        setTimeout("location='editar.html'")
    }else
      alert("Seleccione un estudiante");     
}

//funcion para abrir formulario de ver estudiantte                             
function FuncionVerEstudiante(){
    if ((($("input:checked").attr("id")) != undefined)) { //validacion para seleccion de radio button
        estudianteEditar=[];      
        temp = JSON.parse(localStorage.getItem('ArregloEstudiantes'))[($("input:checked").attr("id"))];
        localStorage.setItem('estudianteEditar',JSON.stringify(temp));
        ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'))  
        delete ArregloEstudiantes[$("input:checked").attr("id")];
        ArregloEstudiantes = ArregloEstudiantes.filter(Boolean);
        localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
        setTimeout("location='ver.html'")
    }else
      alert("Seleccione un estudiante");     
}

//carga datos de estudiante seleccionada de localStorage-estudiantte                 
function FuncionCargaDatosEstudiante(){
  //convertimos el objeto 
  estudianteEditar = JSON.parse(localStorage.getItem('estudianteEditar'))
  document.getElementById("nombre").value = estudianteEditar.nombre;
  document.getElementById("cedula").value = estudianteEditar.cedula;
  document.getElementById("nivIngles").value = estudianteEditar.nivIngles;
  document.getElementById("Carrera").options.add(new Option(estudianteEditar.Carrera))
  foto = estudianteEditar.pict;
  imgEstudiante();
}

//carga datos de estudiante seleccionada de localStorage-estudiantte                 
function FuncionGuardarEdicionEstudiante(){
  //convertimos el objeto 
  estudianteEditar = JSON.parse(localStorage.getItem('estudianteEditar'))
  document.getElementById("nombre").value = estudianteEditar.nombre;
  document.getElementById("cedula").value = estudianteEditar.cedula;
  document.getElementById("nivIngles").value = estudianteEditar.nivIngles;
  foto = estudianteEditar.pict;
  imgEstudiante();
  llenarSelectCarreras();
}

//salva la edicion de la estudiante
function salvarEstudianteEditado() {
  // obtener datos del form
   var nombre = document.getElementById('nombre').value,
        picta =  foto,
        cedula = document.getElementById('cedula').value,
        Carrera = document.getElementById('Carrera').options[document.getElementById('Carrera').options.selectedIndex].text, //extrae valor de select;
        nivIngles = document.getElementById('nivIngles').value;
       
    // crear objeto estudiante
    var estudiantes = { "nombre": nombre, "pict": picta, "cedula": cedula, "Carrera": Carrera, "nivIngles": nivIngles };
    
    // leer los estudiantes de localstorage
    var ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'));
    if (ArregloEstudiantes === null) {
        ArregloEstudiantes = [];
    }
    // agregar el estudiante
    ArregloEstudiantes.push(estudiantes);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
    localStorage.removeItem("estudianteEditar");
    window.history.back();
}

//funcion para volvernos a la pag anterior
function FuncionVolver(){
  window.history.back();
}

//se usa para almacenar un estudiante en un arreglo
function salvarEstudiante() {
    // obtener datos del form
   var nombre = document.getElementById('nombre').value,
        picta =  foto,
        cedula = document.getElementById('cedula').value,
        Carrera = document.getElementById('Carrera').options[document.getElementById('Carrera').options.selectedIndex].text, //extrae valor de select;
        nivIngles = document.getElementById('nivIngles').value;
       

    // crear objeto estudiante
    var estudiantes = { "nombre": nombre, "pict": picta, "cedula": cedula, "Carrera": Carrera, "nivIngles": nivIngles };
    
    // leer los estudiantes de localstorage
    var ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'));
    if (ArregloEstudiantes === null) {
        ArregloEstudiantes = [];
    }
    // agregar el estudiante
    ArregloEstudiantes.push(estudiantes);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
    FuncionAbrirEstudiante();
}

//funcion para previsualizar foto del estudiante
function imgEstudiante(){              
  if (imagen == null) { //si la emagen es null cree un elemento nuevo
      imagen = document.createElement("img"); 
      imagen.id = "imgEstudiante";
      imagen.src = 'D:/Universidad/Programacion/Progra 5/proyecto2/Estudiantes/' + foto +''; 
      var div = document.getElementById("imgEstudiante"); 
      div.appendChild(imagen); 
  }
    else //si no esta null remplace el elemento existente
    imagen.src = 'D:/Universidad/Programacion/Progra 5/proyecto2/Estudiantes/' + foto +''; 
    var div = document.getElementById("imgEstudiante"); 
    div.appendChild(imagen);                   
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
function crearTablaEstudiante() {
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
  heading[0] = "Nombre";
  heading[1] = "Cedula";
  heading[2] = "Carrera";
  heading[3] = "Seleccionar"
  
  //Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloEstudiantes')).length ; i++){
        stock[i] = JSON.parse(localStorage.getItem('ArregloEstudiantes'))[i]
        number++;
        check = "<input type='radio' name='opciones' id= '"+number+"'>"
        stock[i] = new Array (stock[i].nombre, stock[i].cedula, stock[i].Carrera, check )
        
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
function FuncionEliminarEstudiante(){
  if ((($("input:checked").attr("id")) != undefined)) {
    //convertimos el objeto 
  ArregloEstudiantes = JSON.parse(localStorage.getItem('ArregloEstudiantes'))
  
  alert("El estudiante " + ArregloEstudiantes[($("input:checked").attr("id"))].nombre +" fue eliminado exitosante");
  
  //eliminamos el objeto deseado 
  delete ArregloEstudiantes[$("input:checked").attr("id")];
  
  //filtramos Undefinade y se eliminan
  ArregloEstudiantes = ArregloEstudiantes.filter(Boolean);
  
  //guardamos la cadena nueva
  localStorage.setItem('ArregloEstudiantes',JSON.stringify(ArregloEstudiantes));
  location.reload(true);
  }else
      alert("Seleccione un estudiante");  
}

//extrae nombre de la foto
function extract(location) {
  if (location.indexOf('/') > -1)
    foto = location.substring(location.lastIndexOf('/')+1,location.length);
  else
    foto = location.substring(location.lastIndexOf('\\')+1,location.length);

  imgEstudiante();//cargo la imagen
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
