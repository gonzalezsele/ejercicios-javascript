//Hacer una función que me permite llenar un array de números creado como variable global. 

//El array será de numeros aleatorios entre 0 y 50.

    function listaNumeros(pNumero){
        const randomNum = new Array();

            for (let i = 0; i < pNumero; i++){
                let numero = Math.random() * 51; 
                randomNum[i] = parseInt(numero); 
            }
            return randomNum
        }

        //let lista = listaNumeros(50);
        //console.log(lista);

        function pintarListaNumeros(pLista){ 
            let html = `<ul>` 
                for(let i = 0; i < pLista.length; i++){ 
                    html += `<li>${pLista[i]}</li>` 
                }
                html += `</ul>`
                document.write(html);                
        }

        //pintarListaNumeros (listaNumeros(50)); //callback

//Pintar por pantalla el array de números, pero no Mostrar aquellos números que sean decenas (es decir No Mostrar 10,20,30,40,50)

        function filtrarDecenas(pLista){
            const listaFiltrada = new Array();

            for (let i = 0; i < pLista.length; i++){
                if (pLista[i] % 10 === 0) {
                let posicion = listaFiltrada.length;
                listaFiltrada[posicion] = pLista[i]
                }
            }
            return listaFiltrada;
        }

        pintarListaNumeros (listaNumeros(50));