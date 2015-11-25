var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');
var Product = require('../models/Product');

/****************************************
  Collection: Product
*****************************************/

var ProductCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/api/product',
	model: Product
});

App.Collections.product = new ProductCollection;

module.exports = App.Collections.product;
