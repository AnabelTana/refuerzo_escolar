function select(){

    
    // llama a la etiqueta con id ejercicio1, y si tu pones value, lo que hace es llamar
    // al valor selecionado o cambiado
    var cod = document.getElementById("ejercicio1").value;

    //esto evalua la respuesta correcta o incorrecta
    //el if, el for el while se les dice estructuras de control.
    if(cod =="neptuno"){
        // entra si la respuesta es correcta
        var msg = document.querySelector(".msg1");
        msg.classList.remove('error');
        msg.classList.add('correcto');
        msg.innerHTML = "¡Felicidades es correcto!"
    }else{
        // entra aca si la respuesta es incorrecta
        var msg = document.querySelector(".msg1");
        msg.classList.remove('correcto');
        msg.classList.add('error');
        msg.innerHTML = "Es incorrecto"
    }
    
    
}