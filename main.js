addEventListener("DOMContentLoaded", (e)=>{

// Funiones anonimas o funciones lambda son un tipo de funciones que se declaran sin nombre 
// de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez
//  que queramos utilizarla:

// Función anónima "saludo"
const saludo = function () {
  return "Hola";
};

saludo; // ƒ () { return 'Hola'; }
saludo(); // 'Hola'
})
// 