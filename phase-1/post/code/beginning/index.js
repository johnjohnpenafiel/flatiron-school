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

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs")
.then((response) => response.json())
.then(dogs => {
    const ul = document.querySelector('#dogs');
   
   /*
    // this is the same as...
    for (let i = 0; i < dogs.lenght; i++) {
        console.log(dogs[i]);
    };
    */
   //...this
    dogs.forEach(dog => {
        const li = document.createElement('li');
        li.textContent = `${dog.name} (${dog.age})`;
        ul.append(li);
    });

});


// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const dogName = event.target.name.value;
    const dogAge = event.target.age.value;
    console.log(dogName + dogAge);
    fetch("http://localhost:3000/dogs", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name : dogName,
            age : dogAge,
            isGoodDog : true
        })
    })
    .then(response => response.json())
    .then(newDog => {
        console.log(newDog);
        const ul = document.querySelector('#dogs')
        const li = document.createElement('li');
        li.textContent = `${dog.name} (${dog.age})`;
        ul.append(li);
    })
});



// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5 Replace the forms with the "Add a Pet" form where you can add a dog or a cat. UI NEEDED
// 3. Try writing PATCH and DELETE requests!  UI NEEDED