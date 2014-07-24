/**/
//valida el login de inicio
function validarLogin(){
  if (typeof(localStorage) == 'undefined' ) {
    alert('Tu navegador no soporta HTML5');
  } else {
    try {
        if ((document.forms[0].nombre.value == "admin") && (document.forms[0].password.value == "12345") ) {
            localStorage.setItem("nombre",document.forms[0].nombre.value); // Guardamos el valor
            localStorage.setItem("password",document.forms[0].password.value); // Guardamos el valor
            //open("Inicio/inicio.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");
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
