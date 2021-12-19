
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