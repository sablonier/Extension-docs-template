//((===  JS Entry Point  ===))//


//=== Function Imports

import './functions/_syntax-highlight';
import './functions/_clipboard';

$('.button-bars').click(function () {
    $('.docs__sidebar--menu').slideToggle();
});

$('.button-search').click(function () {
    $('.docs__main--header').slideToggle();
});