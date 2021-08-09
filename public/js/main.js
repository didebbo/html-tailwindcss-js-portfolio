const menu = document.querySelector("#menu");
const toggle_menu = document.querySelector("#toggle-menu");

setInterval(() => {
    if (toggle_menu === document.activeElement) {
        toggle_menu.classList.add("focus");
        menu.classList.add("show-menu");
    }
    else {
        toggle_menu.classList.remove("focus");
        menu.classList.remove("show-menu");
    }
}, 100);