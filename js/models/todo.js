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
			completed: false,
			prioritized: false    // Q3
		},

		// Toggle the `completed` state of this todo item.
		// Basically, this.save takes in a property with a value, and the value gets saved to the model. So, this.save completed sets the completed value of our Todo to the opposite (not) of the "gotten" completed value (a straight-up toggle). If this.get('completed') returns true, we set completed to false.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		// Q3
		togglePriority: function () {
			this.save({
				prioritized: !this.get('prioritized')
			});
		}
	});
})();
