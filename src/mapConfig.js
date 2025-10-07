// mapConfig.js
import { OlaMaps } from 'olamaps-web-sdk';

const API_KEY = "zwsoWx1YbisEc6A3LS6vw9H2v3TS9YZUmkqiZICy";

// Initialize the map
export const initializeMap = (containerId = 'map-container') => {
  try {
    const olaMaps = new OlaMaps({
      apiKey: API_KEY
    });

    const myMap = olaMaps.init({
      style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      container: containerId,
      center: [85.8245, 20.2961], // [longitude, latitude] for Bhubaneswar
      zoom: 12
    });

    return myMap;
  } catch (error) {
    console.error('Map initialization failed:', error);
    throw error;
  }
};

// Add truck markers to the map
export const addTruckMarkers = (map, trucks) => {
  if (!map || !trucks) return;

  trucks.forEach(truck => {
    // Create marker
    const marker = new OlaMaps.Marker({
      color: truck.status === 'Active' ? '#22c55e' : '#6b7280'
    })
      .setLngLat([truck.longitude, truck.latitude])
      .addTo(map);

    // Create popup
    const popup = new OlaMaps.Popup({ offset: 25 })
      .setHTML(`
        <div style="padding: 12px; min-width: 180px; font-family: system-ui;">
          <h4 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px;">${truck.id}</h4>
          <p style="margin: 4px 0; font-size: 14px;">👤 ${truck.driver}</p>
          <p style="margin: 4px 0; font-size: 14px;">⛽ ${truck.fuel}</p>
          <p style="margin: 4px 0; font-size: 14px;">📍 ${truck.route}</p>
          <p style="margin: 4px 0; font-size: 14px;">
            Status: <span style="color: ${truck.status === 'Active' ? '#22c55e' : '#6b7280'}; font-weight: bold;">
              ${truck.status}
            </span>
          </p>
        </div>
      `);

    marker.setPopup(popup);
  });
};