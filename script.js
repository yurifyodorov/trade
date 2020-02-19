'use strict';

const elem = document.querySelector('details');
const label = document.querySelector('label');
label.onclick = open;

function open() {
  elem.setAttribute('open', 'open');
}
