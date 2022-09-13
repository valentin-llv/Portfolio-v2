"use strict"

// @ts-ignore
import { createApp, reactive } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js';

function gotoAboutMe() {
    let introHeight = document.getElementById("intro").offsetHeight;
    let topMenuHeight = document.getElementById("top-menu").offsetHeight;

    document.getElementById("content").scrollTo({
        top: introHeight - topMenuHeight,
        behavior: 'smooth'
    });
    store.hamburgerChecked = false;
}

function gotoWork() {
    let introHeight = document.getElementById("intro").offsetHeight;
    let aboutMeHeight = document.getElementById("about-me").offsetHeight;
    let topMenuHeight = document.getElementById("top-menu").offsetHeight;

    document.getElementById("content").scrollTo({
        top: introHeight + aboutMeHeight - topMenuHeight,
        behavior: 'smooth'
    });
    store.hamburgerChecked = false;
}

function gotoContact() {
    let introHeight = document.getElementById("intro").offsetHeight;
    let aboutMeHeight = document.getElementById("about-me").offsetHeight;
    let skillsHeight = document.getElementById("skills").offsetHeight;
    let topMenuHeight = document.getElementById("top-menu").offsetHeight;

    document.getElementById("content").scrollTo({
        top: introHeight + aboutMeHeight + skillsHeight - topMenuHeight,
        behavior: 'smooth'
    });
    store.hamburgerChecked = false;
}

let store = new reactive({
    hamburgerChecked: false,
});

function main() {
    createApp({
        store,

        gotoAboutMe,
        gotoWork,
        gotoContact,
    }).mount();
}

window.onload = main;