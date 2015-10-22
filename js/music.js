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
	var tunes = new Music();

	$(this).find('input').each(function() {
		tunes.set($(this).attr('id'), $(this).val())
		$(this).val('')
	})
	// // For each input element, set a property of your new instance equal to the input's value
	// tunes.set('band', $('#bandname').val());
	// tunes.set('website', $('#website').val());
	// tunes.set('song', $('#bestsong').val());	

	// After setting each property, save your new instance back to your database
	tunes.save(null, {
        success: getData
    });
	
	// $('#bandname').val(''));
	// $('#website').val(''));
	// $('#bestsong').val(''));

    //page does not reload
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class
    var query = new Parse.Query(Music);

	// Set a parameter for your query -- where the website property isn't missing
    query.notEqualTo('website', '');

	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
    query.find({
        success:function(results) {  //can call 'results' something else as well
            buildList(results);
        }
        //success:buildList  //alternative line of code
    })
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	$('#list').empty();
	// Loop through your data, and pass each element to the addItem function
    for (i in data) {
        addItem(data[i]);
    }
    /* data.forEach(functions(d) {
        addItem(d);
    }); */
}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
    var band = item.get('band');
    var website = item.get('website');
    var song = item.get('song');

	// Append li that includes text from the data item
    var li = $('<li>' + band + ', ' + song + ', ' + website + '</li>');
    var button = $("<button class='btn-danger btn-xs'><span class='glyphicon'>Remove</span></button>'");
    button.click(function() {
        item.destroy({
            success:getData
        });
    })
    li.append(button);
    $('#list').append(li);

	// Time pending, create a button that removes the data item on click
}

// Call your getData function when the page loads
getData();