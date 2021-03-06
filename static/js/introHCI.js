'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	// alert("hello");
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

/* Define the listener function */
function projectClick(e) {
	// prevent the page from reloading 
	e.preventDefault();

	// In an event handler, $(this) refers to 
	// the object that triggered the event 
	$(this).css("background-color", "#7fff00");
	
	var containProject = $(this).closest(".project");
	var description = $(containProject).find(".project-description");
	if (description.length == 0) {
		$(containProject).append("<div class='project-description'> \
			<p>Descripton of the project.</p></div>");
	} else {
		$(containProject).hide()
	}
	
}
