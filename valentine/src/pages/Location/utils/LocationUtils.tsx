import mapboxgl from "mapbox-gl";

export const createMarkers = async (map: mapboxgl.Map, visitedPlaces: any[], googleToken: string) => {
  const markers: mapboxgl.Marker[] = [];

  const checkGoogleImage = async (lat: number, lng: number, token: string): Promise<string | null> => {
    const googleImageUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${lat},${lng}&key=${token}`;

    try {
      const response = await fetch(googleImageUrl, { method: "HEAD" }); // Check if image exists
      if (response.ok) {
        return googleImageUrl;
      } else {
        throw new Error("Invalid Google image");
      }
    } catch (error) {
      console.warn(`Failed to load Google Street View image for (${lat}, ${lng}). Omitting image.`);
      return null;
    }
  };

  for (const place of visitedPlaces) {
    console.log(`Processing: ${place.name}`);

    const imageUrl = place.image ?? await checkGoogleImage(place.coords[0], place.coords[1], googleToken);

    console.log(place.coords + " location: " + place.name);
    const marker = new mapboxgl.Marker()
      .setLngLat([place.coords[1], place.coords[0]] as [number, number])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="container" style="background-color: rgb(188, 220, 252); border-radius: 2px; padding: 10px; max-width: 100%;">
            <b class="text-center d-block" style="font-size: 25px; font-weight: 600;">${place.name}</b>
            <br>
            ${imageUrl ? `
              <div style="overflow: hidden; border-radius: 2px;">
                <img src="${imageUrl}" alt="${place.name}" style="width: 100%; height: auto; border-radius: 2px; margin-bottom: 5px; transition: transform 0.3s ease;">
              </div>
            ` : ""}
            <p class="text-center" style="font-size: 20px; line-height: 1.5;">${place.description}</p>
          </div>
          `)
      )
      .addTo(map);

    markers.push(marker);
  }

  return markers;
};
export const focusOnMarker = (map: mapboxgl.Map, marker: mapboxgl.Marker, coords: [number, number], markers: mapboxgl.Marker[]) => {
  markers.forEach((m) => {
    if (m !== marker && m.getPopup()?.isOpen()) {
      m.togglePopup();
    }
  });

  map.flyTo({
    center: [coords[1], coords[0]] as [number, number],
    zoom: 14,
    essential: true,
  });

  const popup = marker.getPopup();
  if (popup != null && marker.getPopup()?.isOpen() == false) {
    popup.setOffset([0, -20]);
    marker.togglePopup();
  }
};

interface NavigationButtonsProps {
  onBackward: () => void;
  onForward: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onBackward, onForward }) => {
  return (
    <div style={{ 
      position: "absolute", 
      bottom: "20px", // Position at the bottom
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center horizontally
      zIndex: 1,
      display: "flex",
      gap: "10px", // Space between buttons
    }}>
      <button 
        onClick={onBackward} 
        style={{ 
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#007bff", 
          color: "#fff", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer" 
        }}
      >
        Back
      </button>
      <button 
        onClick={onForward} 
        style={{ 
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#007bff", 
          color: "#fff", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer" 
        }}
      >
        Forward
      </button>
    </div>
  );
};

export default NavigationButtons;