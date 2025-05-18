const button = document.getElementById("btn-select");
let image = document.getElementById("image");
let namePokemon = document.getElementById("name-pokemon");
let numberPokemon = document.getElementById("number-pokemon");

const changePokemon = async () => {
  const randomNumber = Math.floor(Math.random() * 300) + 1;

  let requestInfoPokemon = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  let dataPokemon = await fetch(requestInfoPokemon);
  let response = await dataPokemon.json();

  image.src = response.sprites.front_default;
  image.alt = `image pokemon ${response.name}`;

  namePokemon.textContent = response.name;
  numberPokemon.textContent = `#${response.id}`;
  console.log("LOOK", response);
};

changePokemon();

button.addEventListener("click", changePokemon);
