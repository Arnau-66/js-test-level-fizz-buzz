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

export function fizzBuzz(input) {

    if (input === ``) {
        return {
            status: `error`,
            message: `Debes ingresar un número`,
            data: {
                input:``,
                result: input,
            }
        };
    }

    try {

        let inputNumber = Number(input);
        if (isNaN(inputNumber)) throw new Error (`El valor ingresado no es un número`);
        if (inputNumber <= 0) throw new Error (`El valor debe ser mayor a 0`);

        let divisibleBy3 = inputNumber % 3 === 0;
        let divisibleBy5 = inputNumber % 5 === 0;
        let output = ``;

        if (divisibleBy3) output += `Fizz`;
        if (divisibleBy5) output += `Buzz`;
        if (!divisibleBy3 && !divisibleBy5) output = inputNumber;
        
        let message = ``;
        if (divisibleBy3 && divisibleBy5) {
            message = `El número es divisible por 3 y por 5`;
        } else if (divisibleBy3) {
            message = `El número es divisible por 3`;
        } else if (divisibleBy5){
            message = `El número es divisible por 5`;
        } else {
            message = 'El númro no es divisible por 3 ni por 5';
        }

        return {
            status: `ok`,
            message,
            data: {
                input: inputNumber,
                output
            }
        };
    } catch (error) {
        return {
            status: `error`,
            message: error.message,
            data: {
                input: ``,
                output: input,
            }
        }
    }
}
