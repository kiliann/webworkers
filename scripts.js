//var myWorker = new Worker("workes.js")

//myWorker.postMessage("");
//myWorker.onmessage = (e)=> {console.log(parseInt(e.data))}
let workerContador;
let contador=0;
//Aqui mandamos los datas extraidos al DOM y tenemos un contador que cuenta cuntas veces los extraemos
function iniciarContador() {
    workerContador = new Worker('workes.js');

    workerContador.onmessage = function(e) {
        contador++;
        console.log(e.data);
        document.getElementById('contador').innerText =contador;
    }
}
//Usamos para detener el contador y la extracion de los datos
function detenerContador() {
    workerContador.terminate();
    workerContador = null;
    document.getElementById('contador').innerText =contador = 0;
}
