/**/
var usuarioActual;
var nPacis;
var posicion;
var selectedItems;





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
        directorCarrera = document.getElementById('directorCarrera').value; 
       

    // crear objeto estudiante
    var carrera = { "nombre": nombre, "creditos": creditos, "directorCarrera": directorCarrera };
    
    // leer los estudiantes de localstorage
    var ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'));
    if (ArregloCarreras === null) {
        ArregloCarreras = [];
    }

    // agregar el estudiante
    ArregloCarreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('ArregloCarreras',JSON.stringify(ArregloCarreras));
}
  

//se usa para llenar el select con datos del local storage
function llenarSelect(){
    var carrera = document.getElementById("Estado"); /* Para no tener que llamar a cada rato a getElementById */
    var ArregloCarreras = JSON.parse(localStorage.getItem('ArregloCarreras'));
      for(var i=0;i<ArregloCarreras.length;i++){ 
        carrera.options[i] = new Option(ArregloCarreras[i].nombre);
       }
  }



function ver() {
    alert("feo");
    }


function crearTabla1() {
    // Declare variables and create the header, footer, and caption.
  var oTHead = oTable.createTHead();
  var oTFoot = oTable.createTFoot();
  var oCaption = oTable.createCaption();
  var oRow, oCell;
  var i, j;

  // Declare stock data that would normally be read in from a stock Web site.
  var heading = new Array();

  heading[0] = "Nombre carrera";
  heading[1] = "Cantidad de creditos";
  heading[2] = "Director de carrera";
  //heading[3] = "Close";

    /* Para no tener que llamar a cada rato a getElementById */
    var stock  =  new Array(JSON.parse(localStorage.getItem('ArregloCarreras')));
    
  // Insert a row into the header.
  oRow = oTHead.insertRow(-1);
  oTHead.setAttribute("bgColor","lightskyblue");

  // Insert cells into the header row.
  for (i=0; i<heading.length; i++)
  {
    oCell = oRow.insertCell(-1);
    oCell.align = "center";
    oCell.style.fontWeight = "bold";
    oCell.innerHTML = heading[i];
  }
  z=0;
  // Insert rows and cells into bodies.
  for (i=0; i<stock.length; i++)
  {

    var oBody = (i<3) ? oTBody0 : oTBody1;
    oRow = oBody.insertRow(0);
    for (j=0; j<stock[i].length; j++)
    {
      oCell = oRow.insertCell(-1);
      oCell.innerHTML = stock[i][j].nombre; 
    }
  }

  // Set the background color of the bodies.
  oTBody0.setAttribute("bgColor","lemonchiffon");
  oTBody1.setAttribute("bgColor","goldenrod");
}


function crearTabla() {
  //Se declaran variables locales
  var oTHead = oTable.createTHead();
  var oRow, oCell;
  var i, j;

  //Se declaran los arreglos 
  var heading = new Array();
  var stock  =  new Array();

  //Se asignan valor al arreglo 
  heading[0] = "Nombre carrera";
  heading[1] = "Cantidad de creditos";
  heading[2] = "Director de carrera";
  heading[3] = "Chke"
  
  //Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloCarreras')).length ; i++){
        stock[i] = JSON.parse(localStorage.getItem('ArregloCarreras'))[i]
        stock[i] = new Array (stock[i].nombre,stock[i].creditos,stock[i].directorCarrera)
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
    var oBody = (i<2) ? oTBody0 : oTBody1;
    oRow = oBody.insertRow(-1);  //acomoda arreglo de atras hacia adelante
    for (j=0; j<stock[i].length; j++){
      oCell = oRow.insertCell(-1);
      oCell.innerHTML = stock[i][j]; 
    }
  }
   // Establece colores de los cuerpos de la tabla
  oTBody0.setAttribute("bgColor","#FF33FF");
  oTBody1.setAttribute("bgColor","Lime");
}