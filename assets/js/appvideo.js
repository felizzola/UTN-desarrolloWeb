// Reproductor de video:

function start(){
    maximo=600;
    videoplay = document.getElementById('videoplay');
    btnplay = document.getElementById('btn-play');
    btnplay.addEventListener('click', play);
}

function play(){
    if(!videoplay.paused && !videoplay.ended) {
        videoplay.pause();
        btnplay.innerHTML='Play';
        window.clearInterval(bucle);
        }else{
        console.log('hola');
        videoplay.play();
        btnplay.innerHTML='Pause';
        bucle=setInterval(estado, 1000);
        }
}

function estado(){
    if(videoplay.ended){
    btnplay.innerHTML='Play';
    window.clearInterval(bucle);
    }
    }

window.addEventListener('load', start, false);