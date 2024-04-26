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
.then((data) => {
    const span =document.querySelector("#dog");
    span.textContent = data.facts[0];
    // DOM mod decition tree

})
.catch((error) => {console.log(error)});


// A synchronous request to https://anapioficeandfire.com/api/books.
fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json())
.then(books => {
    const got = document.querySelector('#got');
    books.forEach((book) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book['name']} (${book.NumberOfPages})`;
        got.append(listItem);
    });
})
.catch((error) => {console.log(error)});


// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

// ~ Challenge: Make a GET request to an API of your choice!
/*
fetch("https://api.thedogapi.com/v1/images/search")
.then(response => response.json())
.then(images => {
    const dogPics = document.body;


}

