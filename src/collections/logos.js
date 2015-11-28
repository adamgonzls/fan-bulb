var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');
var Logo = require('../models/Logo');

/****************************************
  Collection: Logo
*****************************************/

var LogoCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/api/brand',
	model: Logo
});

App.Collections.logo = new LogoCollection;

module.exports = App.Collections.logo;

