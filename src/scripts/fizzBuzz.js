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
                number:``,
                result: input,
            }
        }
        }

    try {

        let inputNumber = Number(input);
        if (isNaN(inputNumber)) throw new Error (`El valor ingresado no es un número`);
        if (inputNumber <= 0) throw new Error (`El valor debe ser mayor a 0`);

        let inputResult = ``;
        let fizz = inputNumber % 3 === 0;
        let buzz = inputNumber % 5 === 0;

        if(fizz) inputResult += `Fizz`;
        if(buzz) inputResult += `Buzz`;
        
        if (inputResult === ``) inputResult = inputNumber.toString();

        return {
            status: `ok`,
            message: `Número procesado correctamente`,
            data: {
                number: inputNumber,
                result: inputResult,
            }
        };
    } catch (error) {
        return {
            status: `error`,
            message: error.message,
            data: {
                number: ``,
                result: input,
            }
        }
    }
}
