// Retrieve data 

const entries = JSON.parse(localStorage.getItem('entries'));

// Get grid
const grid = document.querySelector('#entries-grid');

// clear existing HTML cards
grid.innerHTML = '';

//safety check for entries
if (entries){
    // Get most recent 5 entries
    const recentEntries = entries.slice(0, 5);

    // Loop through each entry and create a card
    recentEntries.forEach(function(entry) {

        // create a card
        const entryDiv = document.createElement('div');
        
        // add class to the card
        entryDiv.classList.add('card');

        //inject Html
        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        // Append the card to the grid
        grid.appendChild(entryDiv);
    });
}
