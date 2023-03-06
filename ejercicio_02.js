        //Crear una array de nombres de diferentes longitudes.
        
        const nombres = new Array('Ana', 'Pepe', 'Juan', 'Lucia', 'Raul', 'Celia');

        //Dividir el array de nombres creados en diferentes array cuyos elementos tengan la misma longitud

        function filtrarCaracteres(pLista, pCantidad) {
            const arrayResultado = new Array();

            for (let nombre of pLista) {
                if (nombre.length === pCantidad) {
                    let posicion = arrayResultado.length;
                    arrayResultado[posicion] = nombre;
                }
            }
            return arrayResultado;
        }

        for (let i = 1; i <= 10; i++) {
            let array = filtrarCaracteres(nombres, i);
            if (array.length !== 0) {
                console.log(i, array);
            }
        }
