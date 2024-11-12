// .replace(/é/g, "e") : remplace les caractères accentués par leur équivalent sans accent grâce à regex

let listeCadeaux = [
    "poupée", "lego", "livre", "voiture télécommandée", "puzzle", "train électrique",
    "bicyclette", "peluche", "ballon de football", "jeu de société", "toupie", "figurine",
    "maquette", "jeu vidéo", "console de jeux", "balle rebondissante", "cubes en bois",
    "pistolet à eau", "boîte à musique", "camion de pompiers", "marionnettes", "cuisine en bois",
    "dinosaure en plastique", "cerf-volant", "microscope pour enfants", "dragon en peluche"
];

let listImages = document.getElementById("list-gifts");

function showList(list, listToShow) {
    console.log(list);
    console.log(listToShow);
    list.forEach(gift => {
        listToShow.innerHTML += `
        <div id="${gift.toLowerCase().replace(/é/g, "e")}" class="gift-item">
            <img src="https://placehold.co/400x500?text=${gift.replace(' ', '+')}" alt="Cadeau : ${gift}">
            <span class="gift-name">${gift}</span>
            <button class="delete-gift">X</button>
        </div>
        `
    });
}

showList(listeCadeaux, listImages);

const RESEARCH = document.getElementById("search");
// Pas efficace car les éléments sont tjs gardés en mémoire
// RESEARCH.addEventListener("keyup", () => {
//     let search = RESEARCH.value.toLowerCase().replace(/é/g, "e");
//     let giftItems = document.querySelectorAll(".gift-item");
//     giftItems.forEach(gift => {
//         if (!gift.id.includes(search)) {
//             gift.style.display = "none";
//         } else {
//             gift.style.display = "flex";
//         }
//     });
// });
RESEARCH.addEventListener("keyup", () => {
    let search = RESEARCH.value.toLowerCase().replace(/é/g, "e");

    // Filtrer la liste
    let filteredGifts = listeCadeaux.filter(gift => gift.toLowerCase().replace(/é/g, "e").includes(search));

    // Vider la liste
    listImages.innerHTML = "";

    // Reafficher la liste filtrée
    showList(filteredGifts);
});

const REMOVE_GIFT = document.querySelectorAll(".delete-gift");
REMOVE_GIFT.forEach(gift => {
    gift.addEventListener("click", () => {
        let filteredGifts = listeCadeaux.filter(gift => gift.toLowerCase().replace(/é/g, "e").id !== gift.toLowerCase().replace(/é/g, "e").id);

        // Vider la liste
        listImages.innerHTML = "";

        // Reafficher la liste filtrée
        showList(filteredGifts);
    });
});