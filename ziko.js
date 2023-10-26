let reqem = Math.floor(Math.random() * 13) + 2;
let nov = Math.floor(Math.random() * 4);
let forma;
let kart;

if (nov == 0) {
    forma = "xac";
} else if (nov == 1) {
    forma = "urek";
}
else if (nov == 2) {
    forma = "kerpic";
}
else if (nov == 3) {
    forma = "Pika";
}

if (reqem == 11) {
    kart = 'Valet';
} else if (reqem == 12) {
    kart = "Dama";
} else if (reqem == 13) {
    kart = "Karol";
} else if (reqem == 14) {
    kart = "Dama";
} else {
    kart = reqem;
}

document.getElementById('oyun').innerHTML = `${kart} ${forma}`;