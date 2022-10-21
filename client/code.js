let addBox = (uuid, uuid2, uuid3) => {
    //creating our container div element
    let box = document.createElement('div');
    document.getElementById('pokes').appendChild(box);
    box.classList.add('container');

    monsters.push(uuid);
    box.setAttribute('id', `${uuid}`);


    //creating  unordered list
    let ul = document.createElement('ul');
    document.getElementById(`${uuid}`).appendChild(ul);

    names.push(uuid2);
    ul.setAttribute('id', `${uuid2}`);


    //creating list
    let li = document.createElement('li');
    document.getElementById(`${uuid2}`).appendChild(li);

    images.push(uuid3);
    li.setAttribute('id', `${uuid3}`);
}

let fetchPoke = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
            uuid++
            uuid2++
            uuid3++
            addBox(uuid, uuid2, uuid3);


            let pokemonsList = document.getElementById(`${uuid3}`);
            pokemonsList.textContent = data.name.toUpperCase();

            let br = document.createElement('br');
            document.getElementById(`${uuid2}`).appendChild(br);

            let img = document.createElement('img');
            img.src = data.sprites.front_default;
            document.getElementById(`${uuid2}`).appendChild(img);
        })
        .catch((error) => {
            alert('nel carnal, no encontre tu pokemon');
            console.log('error ->', error);
        })
}



let addPoke = async (event) => {
    event.preventDefault();

    let input = document.getElementById('pokeTEXT');
    let text = input.value;

    await fetchPoke(text);

    input.value = '';
}

let uuid = 1;
let monsters = [];

let uuid2 = 1;
let names = [];

let uuid3 = 1;
let images = [];

let form = document.getElementById('submitPokemon');
form.addEventListener('submit', addPoke, true);