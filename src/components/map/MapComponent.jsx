import React, {useEffect, useRef, useState} from 'react';
import classes from './map.module.css';
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import CustomSelect from "../UI/CustomSelect";
import MarkerClusterGroup from "react-leaflet-cluster";
import useGeoLocation from "../../hooks/useGeoLocation";
import {FaLocationCrosshairs} from "react-icons/fa6";

L.Icon.Default.imagePath = "/images/markers/"

const MapComponent = (props) => {
  const objects = props.objects ?? null;
  const [basemap, setBasemap] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  const [showMarkers, setShowMarkers] = useState(true);
  const [isPopupImgHovered, setIsHovered] = useState(false);
  const userLocation = useGeoLocation();
  const basemapsDict = [
    {value: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", name:"По умолчанию"},
    {value: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", name:"Теплая"},
    {value: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", name:"Топографическая "},
    {value: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", name:"Яркая"},
    {value: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png", name:"Светлая"},
    {value: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", name:"Темная"},
  ]
  const center = [44.54441236314659, 33.94352466862411];
  const mapRef = useRef()
  const icon = new L.Icon({
    iconUrl: "/images/markers/marker.png",
    iconSize: [36,40],
    iconAnchor: [18,40],
    popupAnchor: [0, -40],
    tooltipAnchor: [18, -20]
  })
  const userIcon = new L.Icon({
    iconUrl: "/images/markers/navigation.png",
    iconSize: [36,36],
    iconAnchor: [18,36],
    popupAnchor: [0, -36],
    tooltipAnchor: [18, -18]
  })
  const markerZoom = 17
  
  const enableGeoLocation = () => {
    if( userLocation.loaded && !userLocation.error ){
      mapRef.current.setView([userLocation.coordinates?.lat, userLocation.coordinates?.lon], markerZoom, {animate: mapRef.current || false,})
    }else {
      alert(userLocation?.error.message)
    }
    return null
  }
  const handleListItemClick = (obj) => {
    mapRef.current?.setView(obj, markerZoom, {animate: true})
  };
  
  useEffect(()=>{
    props.selectedObject && mapRef.current.setView(props.selectedObject, markerZoom, {animate: true})
  },[props.selectedObject])
  
  return (
    <div className={classes.map_container + " mb-5"}>
      <MapContainer center={center} zoom={11} style={{height: '100%'}} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={basemap}
        />
        <FaLocationCrosshairs
          className={classes.map__geolocation}
          onClick={()=>enableGeoLocation()}
        />
        {props.showBasemap && <CustomSelect
          className={classes.map__select}
          value={basemap}
          options={basemapsDict}
          onChange={basemap => setBasemap(basemap)}
        />}
        {props.showObjectList && <ul className={classes.map__list}>
          {
            objects.map((obj)=>
              <li key={obj.id} onClick={() => handleListItemClick(obj)}>{obj.name}</li>
            )
          }
        </ul>}
        <div className={classes.map__toggle}>
          <label htmlFor="markertoggle">Показать маркеры</label>
          <input type="checkbox" name="markertoggle" id="markertoggle"
                 checked={showMarkers}
                 onChange={(e)=>setShowMarkers(e.currentTarget.checked)}/>
        </div>
        {userLocation.loaded && !userLocation.error &&
          <Marker position={[userLocation.coordinates.lat, userLocation.coordinates.lon]} icon={userIcon} >
            <Tooltip>
              Вы
            </Tooltip>
          </Marker>}
        <MarkerClusterGroup>
          {
            showMarkers && objects?.map((obj)=>
              <Marker position={[obj.lat, obj.lon]} key={obj.id} icon={icon} >
                <Popup >
                  <div className={classes.map__popup}>
                    <div>
                      <div className={isPopupImgHovered ? classes.block : classes.none}>
                        {obj.description}
                      </div>
                      <img src={obj.img} alt={obj.name}
                           className={isPopupImgHovered? classes.hovered : ''}
                           onMouseEnter={()=>setIsHovered(true)}
                           onMouseLeave={()=>setIsHovered(false)}
                      />
                      
                    </div>
                    <div className={isPopupImgHovered ? classes.none : ''}>
                      <strong>{obj.name}</strong> <br /> {obj.location}
                    </div>
                    
                  </div>
                </Popup>
                <Tooltip>
                  {obj.lat} <br/> {obj.lon}
                </Tooltip>
              </Marker>
            )
          }
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapComponent;