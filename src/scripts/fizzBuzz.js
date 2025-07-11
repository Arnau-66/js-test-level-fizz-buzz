/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 

export function fizzBuzz(input){
    try{
        let inputNumber = Number(input);
        if(input === ``) throw new Error (`Debes introducir un número`);
        if(isNaN(inputNumber)) throw new Error (`El valor ingresado no es un número`);
        if(inputNumber <= 0) throw new Error (`El valor debe ser mayor a 0`);

        let output = ``;
        let message = ``;
        let fizz = inputNumber % 3 === 0;
        let buzz = inputNumber % 5 === 0;

        if(fizz && buzz) {
            output += `FizzBuzz`;
            message = `El número es divisible por 3 y por 5`;
        } else if (fizz){ 
            output += `Fizz`;
            message = 'El número es divisible por 3';
        } else if (buzz){ 
            output += `Buzz`;
            message = 'El número es divisible por 5';
        } else {
            output = inputNumber;
            message = `El número no es divisible por 3 y por 5`;
        }

        return {
            status: `ok`,
            message: message,
            data: {
               input: input,
               output: output 
            }
        };
    
    } catch (error) {
        return {
            status: `error`,
            message: error.message,
            data: {
                input: input,
                output: ''
            }
        }
    }
}