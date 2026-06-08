const form = document.getElementById('entry-form');
const saveButton = document.getElementById('save-btn');

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// add event listener
saveButton.addEventListener("click", function(event) {

    //prevent fresh of the page
    event.preventDefault();

    //get the values of the input fields
    const title = titleInput.value;
    const content = contentInput.value;

   // Safety check, dont save empty entries
    if (!title || !content) {
        alert("Please fill in all fields.");
        return;
    }

    //get existing entries from local storage or set up an empty array if none exist
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    
    // Added date  so vault.html can display timestamps perfectly
    entries.unshift({ 
        title: title, 
        content: content, 
        date: new Date().toISOString() 
    });

    // save the array to local storage
    localStorage.setItem('entries', JSON.stringify(entries));

   // Clear the form fields after saving
    titleInput.value = '';
    contentInput.value = '';

    // logging the values to the console
    console.log("Title: " + title);
    console.log("Content: " + content);

    //Redirect to home page so users can see their new card
    window.location.href = 'index.html';
});