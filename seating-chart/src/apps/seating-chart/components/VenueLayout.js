import { useState, useEffect, useRef } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import venueMap from '../assets/Venue.png';
import ImageMarker from 'react-image-marker';

const styles = {
  venueMapContainer: {
    backgroundColor: '#F1D5A7', // Light beige background
  }
}

const CustomMarker = (props) => {
  return <div className="custom-marker"></div>
}

export default function VenueLayout({selectedGuest}) {
  const [marker, setMarker] = useState([]);

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
          <TransformComponent>
            {/* <img ref={imgRef} src={venueMap} alt="Venue Layout" className="img-fluid" />
            {selectedGuest && (<Circle x={selectedGuest.x} y={selectedGuest.y} xScale={xScale} yScale={yScale} r={5} color="red" />)} */}
            <ImageMarker src={venueMap} markers={marker} markerComponent={CustomMarker}/>
            <div className="overlay-buttons">
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      
    </div>

  )
}