"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
//Backbone.$ = $;
console.log($("body"), Backbone("body"));
var App = {

	init: function init() {
		var TileView = require('tile');
		this.tile = new TileView();
		console.log('App initialized.', Backbone.View, $("body"));
	}
};

module.exports = App;
window.App = App;