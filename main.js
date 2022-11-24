addEventListener("DOMContentLoaded", (e)=>{

//Funciones autoejecutables: sólo tenemos que envolver entre paréntesis la función anónima 
//en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, 
// ejecutarla:

// Función autoejecutable
(function () {
  console.log("Hola!!");
})();

// Función autoejecutable con parámetros
(function (name) {
  console.log(`¡Hola, ${name}!`);
})("Manz");
})
// 