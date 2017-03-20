/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

// jQuery here: when the document is loaded, run the following function.
$(function () {
	'use strict';

	// kick things off by creating the `App`
  // Why exactly the following line works? Ben's not sure yet. Must look at documentation and figure out how we kick off a backbone app. But we do know that all the other js files came first so that the app object could get set up (note how, as each file runs, it adds more properties to the app object)
	new app.AppView();
});
