/**
 * Responsabilidad: gestionar los eventos
 * */ 

import { fizzBuzz } from "./fizzBuzz.js";
import { showResult, updateHistory } from "./dom.js";

document.addEventListener(`DOMContentLoaded`, () => {
    let input = document.getElementById(`numberInput`);
    let button = document.getElementById(`submitBtn`);

    button.addEventListener(`click`, () => {
        let value = input.value;
        let result = fizzBuzz(value);
        showResult(result);
        updateHistory(result);
    })
})