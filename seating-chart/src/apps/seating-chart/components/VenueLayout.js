import React, { useState, useEffect, useRef, use } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import venueMap from '../assets/Venue.png';
import ImageMarker from 'react-image-marker';
import { useControls } from 'react-zoom-pan-pinch';
const styles = {
  venueMapContainer: {
    backgroundColor: '#F1D5A7', // Light beige background
  }
}

const CustomMarker = React.forwardRef((props, ref) => {
  return <div ref={ref} className="custom-marker"></div>
});

export default function VenueLayout({selectedGuest}) {
  const [marker, setMarker] = useState([]);
  const markerRef = useRef(null);
  const { zoomIn, zoomOut, resetTransform, zoomToElement, ...rest } = useControls();

  useEffect(() => {
    if (selectedGuest) {
      setMarker([{ top: selectedGuest.y, left: selectedGuest.x }]);
    } else {
      setMarker([]);
      setTimeout(() => {
        resetTransform(2);
      }, 250);
    }

  }, [selectedGuest]);

  useEffect(() => {
    if (marker?.length > 0) {
      zoomToElement(markerRef.current, 3, 2000, 'easeOut');
    } else {
      resetTransform(500, "easeOut");
    }
  }, [marker]);

  return (
    <div className="justify-content-center align-items-center w-100 h-auto p-3">
      <div style={styles.venueMapContainer}>
            <>
              <div className="tools d-flex flex-row gap-1">

                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform(500 , "easeOut")}>x</button>
              </div>
              <TransformComponent>
                  <ImageMarker src={venueMap} markers={marker} markerComponent={(props) => <CustomMarker ref={markerRef} {...props}/>}/>
              </TransformComponent>
            </>
      </div>
      
    </div>

  )
}