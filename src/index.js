var app = app || {}

//dependencies
var Backbone = require('backbone');
var productTileTmpl = require("./product_tile");
var logoTileTmpl = require("./logo_tile");

// App
var App = require('./app');
var productCollection = require('./collections/products');
var logoCollection = require('./collections/logos');

// View: Show Products
var ShowProductsView = require('./views/view-products');
var showProducts = new ShowProductsView;
// View: Show Logos
var ShowLogosView = require('./views/view-logos');
var showLogos = new ShowLogosView;


// App Router
App.Router = Backbone.Router.extend({
		
	// Route definitions
	routes: {
		'(/)' : 'index',
		'about(/)' : 'aboutRoute',
		'search(/)' : 'searchRoute',
		'compare(/)' : 'compareRoute',
		'*default' : 'defaultRoute'
	},

	// Route handlers
	index: function () {
		showProducts.render();
		showLogos.render();
	},
	aboutRoute: function () {
		console.log('about route working');
	},
	searchRoute: function () {
		console.log('compare route working');
	},
	compareRoute: function() {
		compareProducts.render();
	},
	defaultRoute: function () {
		console.log('404');
	}
});

//instantiate the router
App.router = new App.Router;

// start backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
