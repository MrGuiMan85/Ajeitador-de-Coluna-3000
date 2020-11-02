let tempoInicial = 15;
let tempo = tempoInicial * 60;

const timerEl = document.getElementById("timer");

setInterval (contagem, 1000)

function contagem() { 
    minutos = Math.floor(tempo / 60);
    segundos = tempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos; 
    minutos = minutos < 10 ? '0' + minutos : minutos;

    timerEl.innerHTML = `${minutos}:${segundos}`;

    if (minutos == 00 && segundos == 00) {
        var audios = document.querySelectorAll("audio");
        var numero = audios.length - 1;
        var random = Math.floor (Math.random() * (numero - 1 + 1 )) + 1; 

        audios[random].play().innerHTML;

        return; 
    }
    tempo--;
}

let pontos = document.getElementById("pontuação");
let macacoreto = document.getElementById("macacoretao");
let macacotorto = document.getElementById("macacotortao");
let pontoNumero = 0; 

function macacoReto() { 
    if(minutos == 00 && segundos == 00) { 
        pontoNumero += 1;
        pontos.innerHTML = pontoNumero;  

        tempo = tempoInicial * 60; 
        timerEl 
    }
}

function macacoTorto() {
    if(minutos == 00 && segundos == 00) {
        pontoNumero -= 1;
        pontos.innerHTML = pontoNumero;
        
        tempo = tempoInicial * 60; 
        timerEl
    }
}