// create a variable called uuid with the value of 1
// create a variable called monsters with a empty array


// create a variable called uuid2 with the value of 20
// create a variable called names with a empty array


// create a variable called uuid3 with the value of 30
// create a variable called images with a empty array


// create a function expression called addPoke and give it the argument of event

    // prevent from the page from reloading

    // create a variable called input and target the id of 'pokeTEXT'
    // create a variable called text and give it the value of input.value


    // call fetchpoken and pass in the argument of text


    // input.value and set it to an empty string

//end of function


// create a variable called form and target the id of  'submitPokemon'
// add an eventListener to form and pass in submit, addpoke, and true as arguements


// create a function expression called fetchPoke and pass in pokemon

    // call fetch with this `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        // then statement take in argument response and convert it to json
        // then statement take in argument data

            // create variable called tempPokemonObj and value to data

            // increase uuid like this, uuid = uuid + Math.random() * 10
            // do the same for uuid2
            // do the same for uuid3
            // call addBox and pass in uuid, uuid2, uuid3

            // create a variable called pokemonsList and target the id of uuid3
            // pokemonsList.textContent and give it the value of tempPokemonObj.name


            // create a variable called img with the value of creating an element img
            // at img.src give it the value of tempPokemonObj.sprites.front_default
            // target the id of uuid2 and append img

        // do a catch statement with the argument of error
            // alert with this string 'Incorrect Pokemon Name, Please Try Again'
            // and console.log this 'error ->', error

// end of function


// create a function expression called addBox that takes 3 arguments
// uuid, uuid2, uuid3

    // create a variable called box with the value of creating an element div
    // get the id of 'pokes' and append your box variable
    // to box add a class of 'container'

    // push uuid to your monsters array
    // set an id to box and give it the string of uuid (convert uuid into a string)


    // create a variable called ul with the value of creating an element ul
    // get the id of uuid (convert uuid into a string) and append your ul variable

    // push uuid2 into your names array
    // set an id to ul and give it the string of uuid2 (convert uuid2 into a string)


    // create a variable called li with the value of creating an element li
    // get the id of uuid2 (convert uuid2 into a string) and append your li variable

    // push uuid3 into your names array
    // set an id to li and give it the string of uuid3 (convert uuid3 into a string)

// end of function
