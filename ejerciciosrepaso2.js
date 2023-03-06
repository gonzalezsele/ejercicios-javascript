    //Pide al usuario que teclee una letra entre A, B, C, D. Si pulsa esas letras en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...

    var letra = prompt("Teclea una letra").toLowerCase();

    if(letra === "a"){
        alert("has acertado");
    } else if (letra === "b"){
        alert("has acertado");
    } else if(letra === "c"){
        alert("has acertado");
    }else if(letra === "d"){
        alert("has acertado");
    }else{
        alert("te has equivocado");
    }
