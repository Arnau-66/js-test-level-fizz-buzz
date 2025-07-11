/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 


export function showResult({status, message, data}) {
    let output = document.getElementById(`output`);

    output.textContent = status === `error` ? `` + message: `Resultado: ${data.output}`;
    output.style.color = status === `error` ? 'red' : `green`;

}

export function updateHistory ({status, data}) {
    if (status !== 'ok') return;
    let historyList = document.getElementById('historyList');
    const list = document.createElement('li');

    list.className = 'list-group-item';
    list.textContent = `${data.input}: ${data.output}`;
    historyList.appendChild(list);
}