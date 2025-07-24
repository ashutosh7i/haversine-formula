# Haversine Formula Distance Calculator

This project provides a simple and efficient tool to calculate the distance between two geographical points using the Haversine formula. The application is built with HTML, and Tailwind CSS, and includes a JavaScript implementation of the formula.

## Tech Stack

- HTML
- TailwindCSS
- DaisyUI
- JavaScript

## Installation

To get started with this project, you can simply clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/ashutosh7i/haversine-formula.git
cd haversine-formula
```

Alternatively, you can use the `haversine.js` file in your own project by importing it.

## The Haversine Formula

The Haversine formula is used to determine the great-circle distance between two points on a sphere, given their longitudes and latitudes. It is a special case of a more general formula in spherical trigonometry, the law of haversines, that relates the sides and angles of spherical triangles.

The formula is as follows:

- **a** = sin²(Δφ/2) + cos φ₁ ⋅ cos φ₂ ⋅ sin²(Δλ/2)
- **c** = 2 ⋅ atan2(√a, √(1−a))
- **d** = R ⋅ c

Where:

- **φ** is latitude
- **λ** is longitude
- **R** is the radius of Earth (average radius = 6,371km)
- **Δφ** is the difference in latitude
- **Δλ** is the difference in longitude
- **d** is the distance between the two points

## Code

The core logic is implemented in JavaScript. The `haversine.js` file contains the function to calculate the distance, and the `index.html` file provides the user interface.

### `haversine.js`

```javascript
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6367.5; // Radius of Earth in km

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
}
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.
