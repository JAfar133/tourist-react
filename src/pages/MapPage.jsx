import React, { useEffect, useState} from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import MapComponent from "../components/map/MapComponent";
import ObjectService from "../services/ObjectService";

L.Icon.Default.imagePath = "/images/markers/"
function MapPage () {
  
  const [objects, setObjects] = useState([])
  
  useEffect(()=>{
    const response = ObjectService.getTouristObjects(-1,0)
    console.log(response.objects)
    setObjects(response.objects)
  },[])
  
  return (
    <div style={{height: 'calc(100vh - 60px)', width: '100vw',marginTop:60}}>
      <MapComponent objects={objects}></MapComponent>
    </div>
    
  );
};

export default MapPage;