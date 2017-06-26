var api = {
  url:"http://laboratoria.cuadra.co:9339/api/v1/students/"
};

var cargarPagina = function(){
  cargarAlumnas();
}

var cargarAlumnas = function(){
  $.getJSON(api.url , function(alumnas){
    alumnas.forEach(mostrarAlumna);
  });
}

var mostrarAlumna = function(alumna){
  var nombre = alumna.name;
  var apellidoPaterno = alumna.pLastName;
  // console.log(ape)
  var apellidoMaterno = alumna.mLastName;
  var $contenedorAlumnas = $("#lista-alumnas")
  // console.log(nombre);

  var $li = $("<li />");
  var $input = $("<input />");

  $input.attr("type","checkbox");

  $li.text(nombre + " " + apellidoPaterno + " " + apellidoMaterno);

  $li.append($input);
  $contenedorAlumnas.append($li);

}
$(document).ready(cargarPagina);
