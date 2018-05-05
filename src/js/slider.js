// Two ways to go about this
    //Create three divs each would have the class of slide1 , slide2 , or slide3
        // and containing the content section with a h2 and p, and buttons

    // Create three classes each with a different bg image
        // change the text or innerHTML of the h2, p tags
            // depending on the bg image being displayed

// Create 3 objects
    // One per slide

const bgImageDiv = document.querySelector('#hero div.slide');
console.log(bgImageDiv);

let i = 0;
const slides = ['slide1', 'slide2', 'slide3'];
const time = 5000;

bgImageDiv.classList.add(slides[0]);
function changeSlide() {
    bgImageDiv.classList.add(slides[0]);
    console.log('inside the change slide function');
    bgImageDiv.classList.remove(slides[i]);

    console.log(slides[i]);
    if(i < slides.length -1) {
        i++;
        bgImageDiv.classList.add(slides[i]);
    } else {
        i = 0;
    }
    setTimeout("changeSlide()", time);
}

window.onload = changeSlide;



// const slides = [
//     slide1 = {
//         class: 'slide1',
//         h1: 'some string',
//         h2: 'some string'
// },
//     slide2 = {
//         class: 'slide2',
//         h1: 'some string',
//         h2: 'some string'
//     },
//     slide3 = {
//         class: 'slide3',
//         h1: 'some string',
//         h2: 'some string'
//     },
// ];

// Get the elements: h1, h2 tag, maybe the span too, and the main div

// Create a switch statement or if else statements which will populate the elements with the correct values at the
    // right time

// Create a function which will rotate through each slide, staying on each one for a certain amount of time

// Call the function on page load



