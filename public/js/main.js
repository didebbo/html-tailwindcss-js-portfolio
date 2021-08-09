const menu = document.querySelector("#menu");
const toggle_menu = document.querySelector("#toggle-menu");

const show_menu = () => {
    toggle_menu.classList.add("focus");
    menu.classList.add("show-menu");
}

const hide_menu = () => {
    toggle_menu.classList.remove("focus");
    menu.classList.remove("show-menu");
}