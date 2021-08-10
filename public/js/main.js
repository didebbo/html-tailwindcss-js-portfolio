const menu = document.querySelector("#menu");
const toggle_menu = document.querySelector("#toggle-menu");
const theme_mode = document.querySelector("#theme-mode");

const show_menu = () => {
    toggle_menu.classList.add("focus");
    menu.classList.add("show-menu");
}

const hide_menu = () => {
    toggle_menu.classList.remove("focus");
    menu.classList.remove("show-menu");
}

const theme_color = () => {
    if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    theme_social_icons();
}

const theme_social_icons = () => {
    const icon_linkedin = document.getElementsByClassName("linkedin-icon");
    const icon_twitter = document.getElementsByClassName("twitter-icon");
    const icon_instagram = document.getElementsByClassName("instagram-icon");
    const icon_facebook = document.getElementsByClassName("facebook-icon");

    if (document.documentElement.classList.contains("dark")) {
        icon_linkedin[1].classList.remove("hidden");
        icon_twitter[1].classList.remove("hidden");
        icon_instagram[1].classList.remove("hidden");
        icon_facebook[1].classList.remove("hidden");

        icon_linkedin[0].classList.add("hidden");
        icon_twitter[0].classList.add("hidden");
        icon_instagram[0].classList.add("hidden");
        icon_facebook[0].classList.add("hidden");
    }
    else {
        icon_linkedin[0].classList.remove("hidden");
        icon_twitter[0].classList.remove("hidden");
        icon_instagram[0].classList.remove("hidden");
        icon_facebook[0].classList.remove("hidden");

        icon_linkedin[1].classList.add("hidden");
        icon_twitter[1].classList.add("hidden");
        icon_instagram[1].classList.add("hidden");
        icon_facebook[1].classList.add("hidden");
    }
}

theme_mode.onclick = () => {
    if (localStorage.theme === "dark") localStorage.theme = "light";
    else localStorage.theme = "dark";
    theme_color();
}

theme_color();
