var app = app || {}

//dependencies
var Backbone = require('backbone');
var productTileTmpl = require("./product_tile");

// App
var App = require('./app');
var productCollection = require('./collections/products');

// View: Show Products
var ShowProductsView = require('./views/view-products');
var showProducts = new ShowProductsView;

// App Router
App.Router = Backbone.Router.extend({
		
	// Route definitions
	routes: {
		'' : 'index',
		'about' : 'aboutRoute',
		'search' : 'searchRoute',
		'*default' : 'defaultRoute'
	},

	// Route handlers
	index: function () {
		showProducts.render();
		// console.log(showProducts)

		// var result = productTileTmpl([{
		// 	product_id: 1,
		// 	product_image: 'T',
		// 	brand: 'Maytag',
		// 	model: 'SeaBreeze', 
		// }])
		// console.log(result);

	},
	aboutRoute: function () {
		console.log('about route working')
	},
	searchRoute: function () {
		console.log('compare route working')
	}
})
	App.router = new App.Router;

	Backbone.history.start();
