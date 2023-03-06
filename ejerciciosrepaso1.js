    //Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
    //En caso afirmativo el usuario responderá si
    //En caso contrario responderá no.
    //Si el usuario responde si se escribirá por el documento «irás a la cárcel».
    //Si el usuario responde no se escribirá por el documento web «irás a casa».
    //En cualquier caso en el documento web se escribirá «la documentación por favor».

    var culpable = prompt("¿eres culpable?");

    if(culpable === "si"){
        document.write("iras a la carcel")
    } else if (culpable === "no"){
        document.write("irás a casa");
    } else {
        document.write("la documentación por favor")
    }
