var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Logo
*****************************************/

App.Models.Logo = Backbone.Model.extend({
	url: function() {
		urlRoot: 'http://localhost:3000/api/brand'
	},
	idAttribute: 'brand_id'
})

module.exports = App.Models.Logo;

