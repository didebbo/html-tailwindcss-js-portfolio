// DOM Elements
const menu = document.querySelector("#menu");
const toggle_menu = document.querySelector("#toggle-menu");
const theme_mode_icons = document.getElementsByClassName("theme-mode-icon");
const icon_linkedin = document.getElementsByClassName("linkedin-icon");
const icon_twitter = document.getElementsByClassName("twitter-icon");
const icon_instagram = document.getElementsByClassName("instagram-icon");
const icon_facebook = document.getElementsByClassName("facebook-icon");

// Main
window.onload = () => {
    theme_color();
}

// Actions
toggle_menu.onclick = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    theme_color();
}

// Functions
const show_menu = () => {
    toggle_menu.classList.add("focus");
    menu.classList.add("show-menu");
}

const hide_menu = () => {
    toggle_menu.classList.remove("focus");
    menu.classList.remove("show-menu");
}

const theme_color = () => {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        theme_mode_icons[0].style.display = "none";
        theme_mode_icons[1].style.display = "inline";
    }
    else {
        document.documentElement.classList.remove("dark");
        theme_mode_icons[0].style.display = "inline";
        theme_mode_icons[1].style.display = "none";
    }
}
