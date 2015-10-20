// Initialize Parse app
Parse.initialize("xgLW2piWkiou72R8UyQD1Jdm0gFb5P595FUdcBMR", "fKx87J0SY19lRycVuAJKICjfdbR2kmiFYVmgsvwe");

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// Create a new instance of your Music class 
var tunes = new Music();

// // Set a property 'band' equal to a band name
// tunes.set('band', 'Earth Wind and Fire');

// // Set a property 'website' equal to the band's website
// tunes.set('website', 'link here');
    
// // Set a property 'song' equal to a song
// tunes.set('song', 'September');

// // Save your instance of your song -- and go see it on parse.com!
// tunes.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var moreTunes = new Music();

	$(this).find('input').each(function() {
		moreTunes.set($(this).attr('id'), $(this).val())
		$(this).val('')
	})
	// // For each input element, set a property of your new instance equal to the input's value
	// moreTunes.set('band', $('#bandname').val());
	// moreTunes.set('website', $('#website').val());
	// moreTunes.set('song', $('#bestsong').val());	

	// After setting each property, save your new instance back to your database
	moreTunes.save();
	
	// $('#bandname').val(''));
	// $('#website').val(''));
	// $('#bestsong').val(''));

	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


