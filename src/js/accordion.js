var cardFooters = document.querySelectorAll('.card-footer');
var spans = document.querySelectorAll('span');
var cardFooters = document.querySelectorAll('.card-footer');



applyClickHandlers();

function applyClickHandlers() {
    for (var i = 0; i < cardFooters.length; i++) {
        cardFooters[i].addEventListener("click", showExtraText);
    };
};

function hideShowingText() {
    for (var i = 0; i < spans.length; i++) {
        spans[i].classList.remove('show');
        spans[i].classList.add('hide');
    };
    document.getElementById('extra-content').classList.remove('show');
    document.getElementById('extra-content').classList.add('hide');
};


function showExtraText() {
    var self = this;
    var extraText = self.previousElementSibling.firstElementChild.querySelector('span');
    var extraContent = self.previousElementSibling.lastElementChild;

    hideShowingText();
    addAndRemoveClasses(extraText, extraContent);
    self.textContent = 'Read Less';

};

function addAndRemoveClasses(extraText, extraContent) {
    if(extraText.classList.contains('hide')) {
        extraText.classList.remove('hide');
        extraText.classList.add('show');
    } else if(extraText.classList.contains('show')){
        extraText.classList.remove('show');
        extraText.classList.add('hide');
    }

    if(extraContent.classList.contains('hide')) {
        extraContent.classList.remove('hide');
        extraContent.classList.add('show');
    }
};


// If a link with Read More is clicked
    //The additional text/content for that card is shown
    // the read more text for that card now reads "read less"
    // any other expanded cards are closed
    // all closed cards now read "read more"


//Consider finding all elements with a relative that has the class of hide and change all those names to Read More
// Anything with a class of show should have Read Less

