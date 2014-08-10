var usuarioActual;
var flag;

//valida el login de inicio
function validarLogin(){
//Se recorre el arreglo de carreras y se traslada a un array nuevo     
  for (var i = 0 ; i < JSON.parse(localStorage.getItem('ArregloUsuarios')).length ; i++){
        stock = JSON.parse(localStorage.getItem('ArregloUsuarios'))[i];
        usser = new Array (stock.Nick);
        pass = new Array (stock.PasswordID);
            if ((document.forms[0].nombre.value == "admin") && (document.forms[0].password.value == "admin") || 
                (document.forms[0].nombre.value == ''+usser+'') && (document.forms[0].password.value == ''+pass+'' )) {
                localStorage.setItem("nombre",stock.nombre); // Guardamos el valor
                setTimeout("location='Inicio/inicio.html'");
                flag = true; 
                break;
            }       
  }
  if (!flag) {
    alert("Error de usuario");  
  };        
}        
