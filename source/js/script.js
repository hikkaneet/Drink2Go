/* в этот файл добавляет скрипты*/

import { mobileMenu } from './mobile-menu.js';
mobileMenu();

// Инициализация слайдера

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Инициализация ползунка цены

var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
    start: [0, 90],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


// Инициализация карты

var map = L.map('map').setView([59.96833, 30.31749], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var pin = L.icon({
  iconUrl: '../img/icons/stack.svg#map-pin',
  iconSize:     [38, 50],
  iconAnchor:   [16, 49],
});

L.marker([59.96833, 30.31749], {icon: pin}).addTo(map);
