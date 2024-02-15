// Dummy data for property listings
const propertyListings = [
    { title: 'Beautiful Home', details: '3 Bed | 2 Bath | 1500 sqft', image: 'property1.jpg' },
    { title: 'Modern Apartment', details: '2 Bed | 1 Bath | 1000 sqft', image: 'property2.jpg' },
    // Add more property listings as needed
];

// Function to dynamically generate property cards
function displayPropertyListings() {
    const propertyListingContainer = document.getElementById('propertyListing');

    propertyListings.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';

        const propertyImage = document.createElement('img');
        propertyImage.src = property.image;
        propertyImage.alt = 'Property Image';
        propertyImage.className = 'property-image';

        const propertyDetails = document.createElement('div');
        propertyDetails.className = 'property-details';

        const propertyTitle = document.createElement('h3');
        propertyTitle.textContent = property.title;

        const propertyDescription = document.createElement('p');
        propertyDescription.textContent = property.details;

        propertyDetails.appendChild(propertyTitle);
        propertyDetails.appendChild(propertyDescription);

        propertyCard.appendChild(propertyImage);
        propertyCard.appendChild(propertyDetails);

        propertyListingContainer.appendChild(propertyCard);
    });
}

// Function to simulate a property search
function searchProperties() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredListings = propertyListings.filter(property => property.title.toLowerCase().includes(searchInput));

    // Clear existing listings
    document.getElementById('propertyListing').innerHTML = '';

    // Display filtered listings
    filteredListings.length > 0 ? displayPropertyListings(filteredListings) : alert('No matching properties found.');
}

// Initial display of property listings
displayPropertyListings();
