function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6367.5;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

// Example usage:
const lat1 = 22.7358480;
const lon1 = 75.8825952;
const lat2 = 24.1287973;
const lon2 = 75.3179781;

const distance = haversineDistance(lat1, lon1, lat2, lon2);
console.log(`Distance between points: ${distance.toFixed(2)} km`);
