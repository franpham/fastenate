"use strict";
/* jslint browser: true */
/* globals $: false */

var CELLCOUNT = 4;
var TEXTS = [];
TEXTS[0] = "Funny & Cute Animals Compilation 2014 New, Hilarious Animals Compilation: Funny, cats, ...";
TEXTS[1] = "PLEASE LIKE, COMMENT & SHARE - Thank you for your support! New Compilations of Fails and more every week in best...";
TEXTS[2] = "It's so cute and funny when one animal wants to play with another who is tired and sleepy. Some sleepy animals are very patient ...";
TEXTS[3] = "Most people think that animals just hate taking bath, but this super cute compilation ...";

function getData(url) {
  $.get(url, function(obj) {
    var list = obj.data.children;
    for (var i = 0; i < CELLCOUNT; i++) {
      $($('.box-pic')[i]).css('background-image',
        'url("' + list[i].data.thumbnail + '")');
      $($('.box-title')[i]).text(list[i].data.title);
      var date = new Date(Number(list[i].data.created_utc) * 1000);
      $($('.box-subtitle')[i]).html('by ' + list[i].data.author +
        ' &bull; ' + date.toLocaleDateString() + ', ' + date.toLocaleTimeString() +
        ' &bull; ' + list[i].data.score + ' views');
      $($('.box-text')[i]).text(TEXTS[i]);
      $($('a.hidden')[i]).prop('href', list[i].data.url);
    }
  });
}

// use $() to not run till onLoad;
$(function() {
  $('#random').on('click', function() {
    getData('/api/random.json');
    $(document).foundation('equalizer', 'reflow');
  });
  $('#myboards').on('click', function() {
    getData('/api/my_boards.json');
    $(document).foundation('equalizer', 'reflow');
  });
  $('#getapp').on('click', function() {
    getData('/api/get_app.json');
    $(document).foundation('equalizer', 'reflow');
  });
  getData('/api/my_boards.json');
  $(document).foundation('equalizer', 'reflow');
});