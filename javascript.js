
let button = document.getElementById('hamburger');

function showList(){
    let navBar = document.getElementById('navi');
    if (navBar.style.display === 'none'){
        navBar.style.display = 'flex'
    } else {
        navBar.style.display = 'none';
    }
}


button.addEventListener('click', showList);

let video = document.getElementById('frontVid');
let logo = document.getElementById('logo');

function showLogo(){
    video.style.display = 'none';
    logo.style.display = 'flex';
    video.style.transition = 'all 2s ease-in';
    logo.style.transition = 'all 2s ease-in';
}

video.addEventListener('ended', showLogo);