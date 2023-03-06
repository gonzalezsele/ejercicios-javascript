        //Realizar la multiplicación de dos números sin usar el operador de multiplicación.
        
        //ternario

        function multiplica(pNum, pNum2) {
            return pNum > 0 ? multiplica(pNum - 1, pNum2) + pNum2 : 0;
            }

        console.log(multiplica(5,5));
