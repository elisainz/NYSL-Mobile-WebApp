function cambiarMes(mes) {
  if(mes == "octubre"){
    $("#septiembre" ).hide();
  $("#octubre").show()
  } else if(mes == "septiembre"){
     $("#octubre").hide()
    $("#septiembre" ).show();
 
  }
  
  window.onload = function() {
    
    $("#octubre").hide()
    $("#septiembre" ).show();
  }
  
}