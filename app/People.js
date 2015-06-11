'use strict';

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var People = Backbone.Model.extend({

	initialize:function(){
		console.log("init People Model");
	},

});

module.exports = People;