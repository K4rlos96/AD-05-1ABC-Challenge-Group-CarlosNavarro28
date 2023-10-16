const h5 = document.getElementById('cambiarColor');

function asignarColorAleatorio() {
    const colores = ['red', 'blue', 'green'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    h5.style.color = colorAleatorio;
}

h5.addEventListener('click', asignarColorAleatorio);