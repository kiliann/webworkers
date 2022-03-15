//var myWorker = new Worker("workes.js")

//myWorker.postMessage("");
//myWorker.onmessage = (e)=> {console.log(parseInt(e.data))}
let workerContador;
let contador=0;
function iniciarContador() {
    workerContador = new Worker('workes.js');

    workerContador.onmessage = function(e) {
        contador++;
        console.log(e.data);
        document.getElementById('contador').innerText =contador;
    }
}

function detenerContador() {
    workerContador.terminate();
    workerContador = null;
    document.getElementById('contador').innerText =contador = 0;
}
