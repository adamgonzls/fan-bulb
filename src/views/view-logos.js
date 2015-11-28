var $ = require('jquery');
var Backbone = require ('backbone');
console.log('here');
var logoTileTmpl = require('../templates/logo_tile.hbs');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  View: Show Logos
*****************************************/

var ShowLogos = Backbone.View.extend({
	el: '.logos',

	collection: App.Collections.logo,

	render: function () {
		var _this = this;
		var logoCollection = this.collection;

		//fetch collection from server
		logoCollection.fetch().done(function (logos) {
			_this.$el.html(logoTileTmpl(logos));
			console.log(logoTileTmpl(), logos);
		});
	}
});

module.exports = ShowLogos;