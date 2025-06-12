import React, { useState, useEffect, useRef } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import venueMap from '../assets/Venue.png';
import ImageMarker from 'react-image-marker';

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
  useEffect(() => {
    if (selectedGuest){
      setMarker([{top: selectedGuest.y, left: selectedGuest.x}])
    } else {
      setMarker([]);
    }
  }, [selectedGuest])

  return (
    <div className="justify-content-center align-items-center w-100 h-auto p-3">
      <div style={styles.venueMapContainer}>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }) => (
            <>
              <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => {console.log(markerRef); zoomToElement(markerRef.current, 3, 1, 'easeOut')}}>x</button>
              </div>
              <TransformComponent>
                  <ImageMarker src={venueMap} markers={marker} markerComponent={(props) => <CustomMarker ref={markerRef} {...props}/>}/>
              </TransformComponent>
            </>
          )}

        </TransformWrapper>
      </div>
      
    </div>

  )
}