'use strict';

const elem = document.querySelector('details');
const label = document.querySelector('label');
label.onclick = openDatails;

function openDatails() {
  elem.setAttribute('open', 'open');
}
