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
	},
	aboutRoute: function () {
		console.log('about route working');
	},
	searchRoute: function () {
		console.log('compare route working');
	},

	defaultRoute: function () {
		console.log('404');
	}
})

//instantiate the router
App.router = new App.Router;

// start backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
