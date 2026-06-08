// Get the entries from local storage
const entries = JSON.parse(localStorage.getItem('entries'));

// Get Vault container
const vaultContainer = document.getElementById('vault-container');

// clear existing HTML
vaultContainer.innerHTML = '';

// Check if there are entries
if (entries && entries.length > 0) {

    // Loop through entries and create HTML for each
    entries.forEach((entry, index) => {

        // Create entry div
        const entryDiv = document.createElement('div');

        // Add class for styling
        entryDiv.classList.add('entry');

        // Add content to entry div
        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
            <small>${new Date(entry.date).toLocaleString()}</small>
        `;

        // Append entry div to vault container
        vaultContainer.appendChild(entryDiv);
    });
} else {
    // If no entries, show message
    vaultContainer.innerHTML = '<p>No entries found. Start by creating a new entry!</p>';
}



