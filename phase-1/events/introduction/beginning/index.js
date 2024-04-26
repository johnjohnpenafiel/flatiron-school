/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event

// ~ the "submit" event
document.querySelector('form').addEventListener('submit', (event) => {
// since the default behavior of 'submit' is to redirect the page to a backend app, let's prevent that!
event.preventDefault();
// take the date that was inputed by the user.
// and set it as the text of #sometime 
const date = event.target['date'].value;
const sometime = document.querySelector('#sometime');
sometime.textContent = date;
});


// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.
// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.


// challenge #2 Event: KeyboardEvent Type: keyup
/*
document.body.addEventListener('keyup',(event) => {
const keyUpH1 = document.createElement('p');
keyUpH1.textContent = "you pressed up arrow"
document.querySelector("h1").append(keyUpH1);
})
*/

// challenge #3 

/*
Steps
HTML 
- Add an image, and a form with one text input to the page.
Javascript
- On submit, have the image change to the URL specified in the text input.
*/

document.querySelector('#imgSearch').addEventListener('submit', (event) => {
    event.preventDefault();
    const imageUrl = event.target['url'].value;
    const newImage =  document.querySelector('#newImage')
    newImage.src = imageUrl;
    document.querySelector('#form').reset();
})



