/*global Backbone */

// var app equals app, or an empty object. If app exists, nothing is done; if app does not yet exist, it gets made to be an object. When the first js file is run, the app object will not yet exist.
var app = app || {};

// Immediately invoked function expression.
// Any variables defined inside this function don't pollute the global scope; don't accidentally overwrite any variables that already exist.
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
