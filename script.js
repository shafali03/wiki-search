// variable

const input = document.querySelector('.main-search');
const searchBtn = document.querySelector('main-btn');


// events
searchBtn.addEventListener('click', searchWiki);

// functions 
function searchWiki(event) {
    event.preventDefault();
    showGif('show')
}

// show / hide gif
function showGif(value) {
    if (value === 'show') {
        document.querySelector('.wait-icon').classList.add('show')
    }
    else if (value === 'hide') {
        document.querySelector('.wait-icon').classList.remove('show')

    }
}