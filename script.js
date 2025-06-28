function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function hi(){
    var words = ["Phua Lih Jang", "潘力彰", "Richard Phua"]
    i = 0;
    setInterval(function(){
        $('#change_words').fadeOut(function(){
            $(this).html(words[(i=(i+1) % words.length)]).fadeIn();
        });
    }, 2000)
}

$(document).ready(function () {
  hi();
});