/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a get request for dog facts
fetch("https://dog-api.kinduff.com/api/facts?number=1")
// Convert the JSON reuqest to JS.
.then((response) => response.json())
// Use the resulting JS!
.then((data) => {console.log(data.facts[0])})
.catch((error) => {console.log(error)});


// A synchronous request to https://anapioficeandfire.com/api/books.

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

// ~ Challenge: Make a GET request to an API of your choice!

