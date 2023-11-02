const ahora = document.querySelector('#hr');
const aminutos = document.querySelector('#mn');
const asegundos = document.querySelector('#sg');

function relogio(){
    const time = new Date();
    const hora = time.getHours();
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();

    ahora.innerHTML = hora;
    aminutos.innerHTML = minutos;
    asegundos.innerHTML = segundos;
}