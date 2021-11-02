
function dibujar1(){
    let dibujo1 = document.getElementById('lienzo1');
    let elemento1 = dibujo1.getContext('2d');
    elemento1.font="bold 20px verdana, sans-serif";
    elemento1.translate(40,80);
    elemento1.fillText("Flexibles",53,106);
    elemento1.beginPath();
    elemento1.arc(100, 100, 100, 0, Math.PI*2, true);
    elemento1.closePath();
    elemento1.strokeStyle = '#c13584';
    elemento1.lineWidth = 9;
    elemento1.stroke();
};

function dibujar2(){
    let dibujo2 = document.getElementById('lienzo2');
    let elemento2 = dibujo2.getContext('2d');
    elemento2.font="bold 20px verdana, sans-serif";
    elemento2.translate(40,80);
    elemento2.fillText("Adaptables",41,106);
    elemento2.beginPath();
    elemento2.arc(100, 100, 100, 0, Math.PI*2, true);
    elemento2.closePath();
    elemento2.strokeStyle = '#c13584';
    elemento2.lineWidth = 9;
    elemento2.stroke();
}; 

window.addEventListener('load', dibujar1);
window.addEventListener('load', dibujar2);