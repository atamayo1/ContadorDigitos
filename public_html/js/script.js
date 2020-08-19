/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("<h1>Programa para contar el número de digitos de un número entero positivo</h1>");
document.write('<p><label>Escribe tu número entero para evaluar la cantidad de números que contiene: </label> <input id="numtest" type="text" name="numtest" /> <button onclick="showQuantity()">Evaluar</button></p>')
document.write('<div id="result"></div>');

function showQuantity(){
   // console.log("self.value", document.getElementById("numtest").value);
    var numTest = parseInt(document.getElementById("numtest").value);
    if (numTest > 0) {
        if(String(numTest).length === 1){
            document.getElementById("result").innerHTML += 'El número '+numTest+' tiene '+String(numTest).length+' digito <br>';
        }else{
            document.getElementById("result").innerHTML += 'El número '+numTest+' tiene '+String(numTest).length+' digitos <br>';
        }
    } else {
        alert("El número entero que ingreses debe ser positivo");
    }
}