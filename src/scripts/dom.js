/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

export function showResult({status, message,}) {
    let output = document.getElementById(`output`);

    output.textContent = status === `ok` ? `` + message: `Error: ${error.message}`;
    output.style.color = status === `error` ? ' red' : `green`;

}

export function updateHistory ({status, data}) {
    if (status !== 'ok') return;
    let historyList = document.getElementById('historyList');
    const list = document.createElement('li');

    list.className = 'list-group-item';
    list.textContent = `${data.number}: ${data.result}`;
    historyList.appendChild(list);
}