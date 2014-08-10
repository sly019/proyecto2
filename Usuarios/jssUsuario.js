var temp;// arreglo temporal de edicion
var pos;//posision del arreglo seleccionado


//funcion para volvernos a la pag anterior
function FuncionVolver(){
  window.history.back();
}

//funcion para abrir formulario de agregar usuario
function FuncionAgregarUsuario(){
  setTimeout("location='agregar.html'");
}

//asigna nombre de usuario actual
function asignarUsuario(){
      usuarioActual = localStorage.getItem('nombre');
      document.getElementById("nombreUsuario").value = usuarioActual;
}

//se usa para almacenar un Usuario en un arreglo de Usuarios
function salvarUsuario() {
    // obtener datos del form
   var nombre = document.getElementById('nombre').value,
        Nick = document.getElementById('Nick').value,
        Cedula = document.getElementById('Cedula').value,
        PasswordID = document.getElementById('PasswordID').value,
        confPass = document.getElementById('confPass').value,
        rollUsurio = ($("input:checked").attr("id"));

    if (PasswordID == confPass) {
      // crear objeto estudiante
    var usuario = { "nombre": nombre, "Nick": Nick, "Cedula": Cedula, "PasswordID": PasswordID, "confPass": confPass, "rollUsurio": rollUsurio };
    
    // leer los estudiantes de localstorage
    var ArregloUsuarios = JSON.parse(localStorage.getItem('ArregloUsuarios'));
    if (ArregloUsuarios === null) {
        ArregloUsuarios = [];
    }
    // agregar el estudiante
    ArregloUsuarios.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloUsuarios',JSON.stringify(ArregloUsuarios));
    window.history.back();
    }
      else
        alert("Contraseñas no coinciden")
}

//funcion para setear datos a la tabla dinamicamente
function crearTablaUsuario() {
  //Se declaran variables locales
  var oTHead = oTable.createTHead();
  var oRow, oCell;
  var i, j;

  //Se declaran los arreglos 
  var heading = new Array();
  var stock  =  new Array();
  var number = -1;
 
  

  //Se asignan valor al arreglo 
  heading[0] = "Nombre";
  heading[1] = "Nick";
  heading[2] = "Cedula";
  heading[3] = "Roll";
  heading[4] = "Seleccionar";
  
  //Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloUsuarios')).length ; i++){
        stock[i] = JSON.parse(localStorage.getItem('ArregloUsuarios'))[i]
        number++;
        check = "<input type='radio' name='opciones' id= '"+number+"'>"
        stock[i] = new Array (stock[i].nombre, stock[i].Nick, stock[i].Cedula, stock[i].rollUsurio, check )
        
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
    
//Elimina usuarios de localStorage-usuario
function FuncionEliminarUsuario(){
  if ((($("input:checked").attr("id")) != undefined)) {
    //convertimos el objeto 
    ArregloUsuarios = JSON.parse(localStorage.getItem('ArregloUsuarios'));
    
    alert("El usuario " + ArregloUsuarios[($("input:checked").attr("id"))].nombre +" fue eliminado exitosante");
    
    //eliminamos el objeto deseado 
    delete ArregloUsuarios[$("input:checked").attr("id")];
    
    //filtramos Undefinade y se eliminan
    ArregloUsuarios = ArregloUsuarios.filter(Boolean);
    
    //guardamos la cadena nueva
    localStorage.setItem('ArregloUsuarios',JSON.stringify(ArregloUsuarios));  
    location.reload(true);
  }else
     alert("Seleccione un usuario"); 
}

//funcion para abrir formulario de editar usuario                             
function FuncionEditarUsuario(){
  if ((($("input:checked").attr("id")) != undefined)) {
      UsuarioEditar=[];
      pos=[];      
      temp = JSON.parse(localStorage.getItem('ArregloUsuarios'))[($("input:checked").attr("id"))];
      localStorage.setItem('UsuarioEditar',JSON.stringify(temp));
      localStorage.setItem('pos',JSON.stringify(($("input:checked").attr("id"))));
      setTimeout("location='editar.html'");
  }else
    alert("Seleccione un usuario");   
}

//carga datos de usuario seleccionada de localStorage-usuario                 
function asignarVariables(){
  //convertimos el objeto 
  Usuario_Editar = JSON.parse(localStorage.getItem('UsuarioEditar'));
  document.getElementById("nombre").value = Usuario_Editar.nombre;
  document.getElementById("Nick").value = Usuario_Editar.Nick;
  document.getElementById("Cedula").value = Usuario_Editar.Cedula;
  document.getElementById(''+ Usuario_Editar.rollUsurio+'').checked=true;
}

//se usa para almacenar un Usuario en un arreglo de Usuarios
function salvarUsuarioEditado() {
    ArregloUsuarios = JSON.parse(localStorage.getItem('ArregloUsuarios'));
    numBorrar = JSON.parse(localStorage.getItem('pos'));
    delete ArregloUsuarios[numBorrar];
    ArregloUsuarios = ArregloUsuarios.filter(Boolean);
    localStorage.setItem('ArregloUsuarios',JSON.stringify(ArregloUsuarios));

    ArregloUsuarios = JSON.parse(localStorage.getItem('ArregloUsuarios'));
    // obtener datos del form
   var nombre = document.getElementById('nombre').value,
        Nick = document.getElementById('Nick').value,
        Cedula = document.getElementById('Cedula').value,
        PasswordID = document.getElementById('PasswordID').value,
        confPass = document.getElementById('confPass').value,
        rollUsurio = ($("input:checked").attr("id"));

    if (PasswordID == confPass) {
      // crear objeto Usuario
    var usuario = { "nombre": nombre, "Nick": Nick, "Cedula": Cedula, "PasswordID": PasswordID, "confPass": confPass, "rollUsurio": rollUsurio };
    
    // agregar el usuario nuevo
    ArregloUsuarios.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloUsuarios',JSON.stringify(ArregloUsuarios));
    window.history.back();
    }
      else
        alert("Contraseñas no coinciden")

    localStorage.removeItem("pos");
    localStorage.removeItem("UsuarioEditar");
}

//funcion para borrar los arreglos temporales hechos 
function cerrarEdicionUsuario(){
      localStorage.removeItem("pos");
      localStorage.removeItem("UsuarioEditar");
      window.history.back();
}