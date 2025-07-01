/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 


export function showResult({status, message, data}) {
    let output = document.getElementById(`output`);

    output.textContent = status === `success` ? `` + message: `Resultado: ${data.result}`;
    output.style.color = status === `error` ? ' red' : `green`;

}

export function updateHistory ({status, data}) {
    if (status !== 'success') return;
    let historyList = document.getElementById('historyList');
    const list = document.createElement('li');

    list.className = 'list-group-item';
    list.textContent = `${data.number}: ${data.result}`;
    historyList.appendChild(list);
}