//arreglo para saber cuales divs ya estan ocupados
let arreglo = ["","","","",""];
//funcion que evita que se abra como enlace al soltar un elementos, tambien hace que funcione lo de
// arrastrar y soltar
function permiteDrop(ev) {
    ev.preventDefault();
}

//que sucede cuando se inicia arrastrando un elemento
function drag(ev) {
//metodo que establece el tip de datos y el valor de dato arrastrado
//en este caso el dato es texto y el valor es  del elemento arrastrado
    ev.dataTransfer.setData('text',ev.target.id);
}

function drop(ev){

    // valida que este vacio el contenedor o cajita celeste
    if(arreglo[parseInt(ev.target.id)] == ""){
        var data =  ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] =  data;
        // poner la img dentro de la caja celeste
        ev.target.appendChild(document.getElementById(data));
    }

    //controlo que ya esten arrastrados todos los elementos
     if (arreglo [0] != "" && arreglo[1]!="" &&arreglo[2]!="" &&arreglo[3]!="" &&arreglo[4]!=""){

     //controlo si hay coincidencia
     if (arreglo [0] =="uno" && arreglo[1] =="dos" && arreglo[2] == "tres" && arreglo[3] == "cuatro" && arreglo[4] == "cinco") {
        document.querySelector(".mensaje").innerHTML = "¡Felicidades lo has logrado!";
     }
     else{
         document. querySelector(".mensaje").innerHTML = "¡Intentalo de nuevo!";
     }
 }

}

