var btnanadir = $('#anadir');
var nombre = $('#nombre').val();
console.log(nombre);


btnanadir.click(function() {
  $.post( "/registro", function( data ) {
      alert(nombre.text());
      console.log(data);
  });
});
