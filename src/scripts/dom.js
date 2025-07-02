/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

export function showResult({status, message}) {
    let output = document.getElementById(`output`);

    output.textContent = status === `ok` ? message: `Error: ${message}`;
    output.style.color = status === `error` ? ' red' : `green`;

}

export function updateHistory ({status, data}) {
    if (status !== 'ok') return;

    let historyList = document.getElementById('historyList');
    let list = document.createElement('li');

    list.className = 'list-group-item';
    list.textContent = `${data.input}: ${data.output}`;
    historyList.appendChild(list);
}