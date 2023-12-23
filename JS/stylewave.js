/* All rights to StyleWave are reserved by Mohammad Hossein Anabarlou (Mehrab Anbarlou). */

/* Variable introduction code */

const allElements = document.querySelectorAll("*");
const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");

/* Variable introduction code end */

/* Basic styles */

allElements.forEach(function (element){
    element.style.transition = '0.5s';
    element.style.boxSizing = 'border-box';
    element.style.fontFamily = 'sans-serif';
});

/* Basic styles end */

/* Theme Checker code */

function getTheme() {
    if (htmlElement.getAttribute('stylewave-theme') === 'dark') {
        return 'dark';
    }
    else if (htmlElement.getAttribute('stylewave-theme') === 'light') {
        return 'light';
    }
}

function themeChanger(theme) {
    if (theme === 'dark') {
        allElements.forEach(function (element) {
            element.style.color = '#e4e4e4';
        });
        bodyElement.style.backgroundColor = '#222222';
    } else if (theme === 'light') {
        allElements.forEach(function (element) {
            element.style.color = '#222222';
        });
        bodyElement.style.backgroundColor = 'white';
    }
}

themeChanger(getTheme());

/* Theme Checker code end */

/* Copyright (c) 2023 Mohammad Hossein Anbarlou (Mehrab Anbarlou) */
