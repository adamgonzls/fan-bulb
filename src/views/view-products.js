var $ = require('jquery');
var Backbone = require ('backbone');
var productTileTmpl = require('../templates/product_tile.hbs');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  View: Show Products
*****************************************/

var ShowProducts = Backbone.View.extend({
	el: '.tiles',

	collection: App.Collections.product,

	render: function () {
		var _this = this;
		var productCollection = this.collection;

		//fetch collection from server
		productCollection.fetch().done(function (products) {
			_this.$el.html(productTileTmpl(products));
			console.log(productTileTmpl(), products);
		});
	}
});

module.exports = ShowProducts;