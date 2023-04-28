const gun = document.getElementById('gun');
let ammo = 0;
const realBullet = Math.floor(Math.random() * 6) + 1;
let counter = 0;

function handleClick() {
    if (ammo < 6) {
        // mecanisme du revolver
        ammo++;
        document.getElementById(`bullet${ammo}`).classList.add('hidden');

        // animation du revolver
        gun.classList.remove(`shoot${counter}`);
        counter ++;
        gun.classList.add(`shoot${counter}`);
    }
    if (ammo === realBullet) {
        // son du tir
        const audio = new Audio('shoot.mp3');
        audio.play();
        console.log('You are dead');
        // affiche le message de mort
        document.getElementById('dead').style.display = 'block';
        // enlève l'écouteur d'événement
        gun.removeEventListener('click', handleClick);
    }
}

// Attends 2 secondes avant d'ajouter l'écouteur d'événement sur le revolver
setTimeout(function() {
    gun.addEventListener('click', handleClick);
}, 2000);

// reload la page pour rejouer
const dead = document.getElementById('dead');
dead.addEventListener('click', function() {
    location.reload();
});


