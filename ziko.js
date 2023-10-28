let ad = prompt('Adinizi yazin: ');
let oyna = document.getElementById('kart');
let son = document.getElementById('son');
let netice = 0;
let score;
let finish = '';
let number;
let nov;

oyna.onclick = function () {
    number = Math.floor(Math.random() * 13) + 2;
    nov = Math.floor(Math.random() * 4);
    let card = number;
    let novu;
    if (number == 11) {
        card = "valet";
    } else if (number == 12) {
        card = "dama";
    } else if (number == 13) {
        card = "korol";
    } else if (number == 14) {
        card = "tuz";
    }

    if (nov == 0) {
        novu = "xac";
    } else if (nov == 1) {
        novu = "urek";
    } else if (nov == 2) {
        novu = "pika";
    } else if (nov == 3) {
        novu = "kerpic";
    }
    score = number;
    if (number == 11) {
        score = 10;
    } else if (number == 12) {
        score = 10;
    } else if (number == 13) {
        score = 10;
    } else if (number == 14) {
        score = 11;
    }
    
    netice += score;
    if (netice > 21) {
        document.getElementById('game').innerHTML = `${ad} Siz uduzdunuz`;
        netice = 0;
    } else {
        document.getElementById('game').innerHTML = `${card} ${novu} ${netice}`;
    }
    

}

son.onclick = function () {
    if (netice < 21) {
        finish = netice;
        document.getElementById('game').innerHTML = `Siz ${finish} xal ile bitirdiniz`;
    } else {
        document.getElementById('game').innerHTML = `${ad} Siz uduzdunuz`;
    }

}
