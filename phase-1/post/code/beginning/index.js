/*
Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.
*/
/*
// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs") //Fetch the data from the specific URL
.then((response) => response.json()) //Parse the response as JSON - [GET REQUEST]
.then(dogs => { //Process the JSON data.  [GET REQUEST]
    const ul = document.querySelector('#dogs'); //Select the Ul element with the ID dogs
    dogs.forEach(dog => { //Loop through each dog in the 'dogs' array
        const li = document.createElement('li'); //Create a new <li> element
        li.textContent = `${dog.name} (${dog.age})`; //Set the text content of the <li> element to the dog's name and age
        ul.append(li); //Append the <li> element to the <ul> element
    });
});

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

document.querySelector('form').addEventListener('submit', event => { //Add an event listener to the form for the "submit" event.
    event.preventDefault(); //Prevent the defualt form submission behavior
    const dogName = event.target.name.value; //Get the values of the 'name' input fields from the form
    const dogAge = event.target.age.value; //Get the values of the 'age' input fields from the form
    //console.log(dogName + dogAge); //Log the concatenated string of dogName and dogAge to the console
    fetch("http://localhost:3000/dogs", { // Make a POST request to the specified URL (http://localhost:3000/dogs) with the form data
        method : "POST", //Specify the HTTP method as POST
        headers: { //Set the request headers
            "Content-Type": "application/json", //Specify the content type as JSON
            "Accept" : "application/json" //Specify the accepted response type as JSON
        },
        body: JSON.stringify({ //Convert the form data to a JSON string
            name : dogName, 
            age : dogAge,
            isGoodDog : true //Example additional data
        })
    })
    .then(response => response.json()) //Parse the response as JSON
    .then(newDog => { //Process the JSON data
        //console.log(newDog); //Log the new dog object to the console
        const ul = document.querySelector('#dogs') //Select the <ul> element with the ID 'dogs'
        const li = document.createElement('li'); //Create a new <li> element
        li.textContent = `${newDog.name} (${newDog.age})`; //Set the text content of the <li> element to the new dog's name and age
        ul.append(li); //Append the <li> element to the <ul> element
    })
    document.querySelector('form').reset(); //Reset the form fields
});

*/

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5 Replace the forms with the "Add a Pet" form where you can add a dog or a cat. UI NEEDED
// 3. Try writing PATCH and DELETE requests!  UI NEEDED

//FUNCTIONS

function createAnimals (animals, elementId) {
    const ul = document.querySelector(elementId); //Select the Ul element with the ID dogs
    animals.forEach(animal => { //Loop through each dog in the 'dogs' array
        const li = document.createElement('li'); //Create a new <li> element
        li.textContent = `${animal.name} (${animal.age})`; //Set the text content of the <li> element to the dog's name and age
        ul.append(li); //Append the <li> element to the <ul> element
    });
}

function createDog(dogName, dogAge) {
    fetch("http://localhost:3000/dogs", { 
        method: "POST", // Specify the HTTP method as POST
        headers: { 
            "Content-Type": "application/json", // Specify the content type as JSON
            "Accept": "application/json" // Specify the accepted response type as JSON
        },
        body: JSON.stringify({ // Convert the form data to a JSON string
            name: dogName,
            age: dogAge,
            isGoodDog: true // Example additional data
        })
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(newDog => { // Process the JSON data
        createAnimals([newDog], '#dogs'); // Update the UI with the new dog data
    });
}

function createCat(catName, catAge) {
    fetch("http://localhost:3000/cats", { 
        method: "POST", // Specify the HTTP method as POST
        headers: { 
            "Content-Type": "application/json", // Specify the content type as JSON
            "Accept": "application/json" // Specify the accepted response type as JSON
        },
        body: JSON.stringify({ // Convert the form data to a JSON string
            name: catName,
            age: catAge,
            isGoodCat: true // Example additional data
        })
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(newCat => { // Process the JSON data
        createAnimals([newCat], '#cats'); // Update the UI with the new dog data
    });
}

//DOGS

fetch("http://localhost:3000/dogs") //Fetch the data from the specific URL
.then((response) => response.json()) //Parse the response as JSON - [GET REQUEST]
.then(dogs => { //Process the JSON data.  [GET REQUEST]
    createAnimals(dogs, '#dogs');
});

// CATS

fetch("http://localhost:3000/cats") //Fetch the data from the specific URL
.then((response) => response.json()) //Parse the response as JSON - [GET REQUEST]
.then(cats => { //Process the JSON data.  [GET REQUEST]
    createAnimals(cats, '#cats');
});

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission behavior
    const name = event.target.name.value; // Get the value of the 'name' input field from the form
    const age = event.target.age.value; // Get the value of the 'age' input field from the form
    if (event.target.petSelect.value === 'dog') {
        createDog(name, age);
     }
    else if (event.target.petSelect.value === 'cat') {
        createCat(name, age);
    }
    document.querySelector('form').reset(); // Reset the form fields
});

