addEventListener("DOMContentLoaded", (e)=>{

    // Funciones como objetos
    //  se pueden declarar funciones como si fueran objetos. 
    // Sin embargo, es un enfoque que no se suele utilizar en producción.
    // Ejemplo:
    
    const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'
})