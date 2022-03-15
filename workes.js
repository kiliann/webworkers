'use strict'

const urlApi = "https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new";

//Aqui hacemos las llamada a la api y extraemos los datos con un intervalo de 30 segundos.
this.onmessage = setInterval((e)=>{
    fetch(urlApi)
        .then(reponse =>reponse.text())
        .then(data =>{postMessage(data)

        })
},3000)
