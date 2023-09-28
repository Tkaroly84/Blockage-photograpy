// Az elérési útvonalakat tartalmazó objektum
const kepek = {
    eskuvo: [
        'images/esküvő/Regi esküvő-11.jpg',
        'images/esküvő/Regi esküvő-12.jpg',
        'images/esküvő/Regi esküvő-13.jpg',
    ],
    hazikedvenc: [
        'images/kutyák/Balu-5.jpg',
        'images/kutyák/Kutyás képek-9.jpg',
        'images/kutyák/Liget-7.jpg',
    ],
    sport: [
        'images/sportok/Fóti bánya-2.jpg',
        'images/sportok/Hockey 7.jpg',
        'images/sportok/Papika-2.jpg',
    ],
    madarak: [
        'images/madarak/állatkert 5.jpg',
        'images/madarak/belváros 4.jpg',
        'images/madarak/Belváros-6.jpg',
    ],
    portre: [
        'images/portrék/Fotózás-3.jpg',
        'images/portrék/Gabi.jpg',
        'images/portrék/Kobe 2.jpg',
    ],
    street: [
        'images/street/R6MK2911-Enhanced-NR-2.jpg',
        'images/street/R6MK6250-Enhanced-NR.jpg',
        'images/street/villanyos.jpg',
    ],
};

// Csoportokhoz kattintás események hozzáadása
document.getElementById('eskuvo').addEventListener('click', () => megjelenitKepcsoport('eskuvo'));
document.getElementById('hazikedvenc').addEventListener('click', () => megjelenitKepcsoport('hazikedvenc'));
document.getElementById('sport').addEventListener('click', () => megjelenitKepcsoport('sport'));
document.getElementById('madarak').addEventListener('click', () => megjelenitKepcsoport('madarak'));
document.getElementById('portre').addEventListener('click', () => megjelenitKepcsoport('portre'));
document.getElementById('street').addEventListener('click', () => megjelenitKepcsoport('street'));


// Képek megjelenítése a kiválasztott csoport alapján
function megjelenitKepcsoport(csoport) {
    const kepkeret = document.getElementById('kepkeret');
    kepkeret.innerHTML = ''; // Előző képek törlése

    kepek[csoport].forEach((kepEleresiUt) => {
        const kepElem = document.createElement('img');
        kepElem.src = kepEleresiUt;
        kepkeret.appendChild(kepElem);
    });
}
