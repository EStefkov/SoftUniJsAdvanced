function toggle() {
    let button = document.querySelector('.button'); // .class
    let divExtra = document.querySelector('#extra'); // # id 

    divExtra.style.display = divExtra.style.display == 'none' || divExtra.style.display == '' ? 'block' : '';
    button.textContent = button.textContent == "More" ? 'Less' : 'More';
}