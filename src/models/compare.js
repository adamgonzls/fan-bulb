var Backbone = require ('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Compare
*****************************************/

App.Models.Compare = Backbone.Model.extend({
	url: function() {
		urlRoot: 'http://localhost:3000/api/product'
	},
	idAttribute: 'product_id'
})

module.exports = App.Models.Compare