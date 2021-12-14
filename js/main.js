let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    navbar.classList.remove('active');
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
}


let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}