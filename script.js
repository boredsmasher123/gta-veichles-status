// Example JavaScript code to load and display GTA Online vehicles
const vehiclesURL = 'https://example.com/api/vehicles'; // Replace with actual API endpoint

async function fetchVehicles() {
    try {
        const response = await fetch(vehiclesURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const vehicles = await response.json();
        displayVehicles(vehicles);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
    }
}

function displayVehicles(vehicles) {
    const vehicleList = document.getElementById('vehicle-list');
    vehicleList.innerHTML = vehicles.map(vehicle => `
        <div class="vehicle">
            <h2>${vehicle.name}</h2>
            <p>Price: $${vehicle.price}</p>
            <p>Trade Price: $${vehicle.tradePrice}</p>
            <p>Missile Resistance: ${vehicle.missileResistance}</p>
            <p>Unlock Requirements: ${vehicle.unlockRequirements}</p>
        </div>
    `).join('');
}

// Call the fetchVehicles function to load vehicles on page load
window.onload = fetchVehicles;