var app = app || {}

;(function () {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'index',
			'about' : 'aboutRoute',
			'search' : 'searchRoute',
			'*default' : 'defaultRoute'

		},
		index: function () {
			console.log('index view working')
			// var view = new app.IndexView
			// view.render()
		},
		aboutRoute: function () {
			console.log('about route working')
		},
		searchRoute: function () {
			console.log('compare route working')
		}


	}) 

	var router = new Router

	Backbone.history.start()

}())