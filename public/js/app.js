"use strict";
/* jslint browser: true */
/* globals $: false */

var CELLCOUNT = 4;
var TEXTS = [];
TEXTS[0] = "Funny & Cute Animals Compilation 2014 New, Hilarious Animals Compilation 2014, Fun,funny, hilarious dogs,horses,goat, cats, ...";
TEXTS[1] = "PLEASE LIKE, COMMENT & SHARE - Thank you for your support! New Compilations of Fails and more every week in best...";
TEXTS[2] = "Most people think that animals just hate taking bath, but this super cute compilation will prove them wrong. These animals...";
TEXTS[3] = "It's so cute and funny when one animal wants to play with another who is tired and sleepy. Some sleepy animals are very patient ...";

function getData(url) {
  $.get(url, function(obj) {
    var list = obj.data.children;
    for (var i = 0; i < CELLCOUNT; i++) {
      $('.box-pic').css('background-image',
        'url("' + list[i].data.thumbnail + '")');
      $('.box-title').text(list[i].data.title);
      $('.box-subtitle').text('by ' + list[i].data.author +
        '&bull;' + (new Date(list[i].data.created_utc)).toString() +
        '&bull;' + list[i].data.score + ' views');
      $('.box-text').text(TEXTS[i]);
    }
  });
}

// use $() to not run till onLoad;
$(function() {
  $('#random').on('click', function() {
    getData('/api/random.json');
  });
  $('#myboards').on('click', function() {
    getData('/api/my_boards.json');
  });
  $('#getapp').on('click', function() {
    getData('/api/get_app.json');
  });
  getData('/api/my_boards.json');
});