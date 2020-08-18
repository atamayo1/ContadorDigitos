/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("<h1>Programa para contar el número de digitos de un número entero positivo</h1>");

function showQuantity(){
   var numTest = parseInt(prompt("Escribe tu número entero para evaluar la cantidad de números que contiene:"));
    if (numTest > 0) {
        if(String(numTest).length === 1){
            document.write('El número proporcionado tiene '+String(numTest).length+' digito <br>');
        }else{
            document.write('El número proporcionado tiene '+String(numTest).length+' digitos <br>');
        }
    } else {
        alert("El número entero que ingreses debe ser positivo");
        this.reload();
    }
}
function reload(){
    location.reload();
}
this.showQuantity();

document.write("<br><button onclick='reload()'>Evaluar cantidad de números que contiene el número entero</button>");