// const pokedexImages = [
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
//     // ... (les URLs pour tous les 151 Pokémons de la première génération)
//   ];

// 1025 car il y a 1025 pokemons dans la base de données de l'API
const pokedexImages = Array.from({ length: 1025 }, (_, i) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`);

let pokeContainer = document.querySelector('#catch-them-all');

pokedexImages.forEach((pokemon, index) => {
    pokeContainer.innerHTML += `
    <div class="pokemon-container">
        <img src="${pokemon}" class= "pokemon" alt="pokemon number :${index + 1}">
        <span class="pokemon-number">Pokémon N° ${index + 1} </span>
    </div>
    `;
});