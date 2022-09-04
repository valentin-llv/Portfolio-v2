"use strict"

// @ts-ignore
import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js';

function main() {
    createApp({
        hamburgerChecked: false,
    }).mount();
}

window.onload = main;