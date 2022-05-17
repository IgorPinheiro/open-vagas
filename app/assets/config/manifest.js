//= link_tree ../images
//= link_directory ../stylesheets .css

//= require jquery3
//= require popper
//= require bootstrap

(() => {
    'use strict'
  
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  })()