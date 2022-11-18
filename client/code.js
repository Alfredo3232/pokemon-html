// a uuid for our containers
let uuid = 1;
let monsters = [];

// a uuid for our unordered lists
let uuid2 = 20;
let names = [];

// a uuid for our lists
let uuid3 = 30;
let images = [];

let addPoke = (event) => {
    // preventing the page from reloading
    event.preventDefault();

    // taking the value of the user's input
    let input = document.getElementById('pokeTEXT');
    let text = input.value;

    // we are waiting for this function to end
    fetchPoke(text);

    // we are reseting the input back to empty, when fetchPoke finishes
    input.value = '';
}

// we are executing addPoke function when user submits
let form = document.getElementById('submitPokemon');
form.addEventListener('submit', addPoke, true);

// function that takes in string, and hits pokeAPI to find that pokemon. The data it uses is adds pokemon name and sprite img to our DOM
let fetchPoke = (pokemon) => {
    //disable eslint beacuse we have jquery in CDN
    // eslint-disable-next-line no-undef
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`,
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            let tempPokemonObj = data;
            // we are first increasing our 'uuid', then calling our addBox function and putting those uuids are arguments
            uuid = uuid + Math.random() * 10;
            uuid2 = uuid2 + Math.random() * 10;
            uuid3 = uuid3 + Math.random() * 10;
            addBox(uuid, uuid2, uuid3);

            // adding the pokemons name to the list element
            let pokemonsList = document.getElementById(`${uuid3}`);
            pokemonsList.textContent = tempPokemonObj.name;

            // adding our img sprite to our unordered list 
            let img = document.createElement('img');
            img.src = tempPokemonObj.sprites.front_default;
            document.getElementById(`${uuid2}`).appendChild(img);
        },
        error: function (request, error) {
            alert('Incorrect Pokemon Name, Please Try Again');
            console.log('error ->', error);
        }
    });
};

let addBox = (uuid, uuid2, uuid3) => {
    // creating our container div element
    let box = document.createElement('div');
    document.getElementById('pokes').appendChild(box);
    box.classList.add('container');

    monsters.push(uuid);
    box.setAttribute('id', `${uuid}`);


    // creating  unordered list
    let ul = document.createElement('ul');
    document.getElementById(`${uuid}`).appendChild(ul);

    names.push(uuid2);
    ul.setAttribute('id', `${uuid2}`);


    // creating list
    let li = document.createElement('li');
    document.getElementById(`${uuid2}`).appendChild(li);

    images.push(uuid3);
    li.setAttribute('id', `${uuid3}`);
};