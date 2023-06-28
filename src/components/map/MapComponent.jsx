import React, {useState} from 'react';
import classes from './map.module.css';
import {MapContainer, Marker, Popup, TileLayer, Tooltip, useMap} from "react-leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import CustomSelect from "../UI/CustomSelect";

L.Icon.Default.imagePath = "/images/markers/"

const MapComponent = (props) => {
  const center = [44.54441236314659, 33.94352466862411]
  const objects = props.objects??null;
  const [basemap, setBasemap] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  const [selectedObject, setSelectedObject] = useState(null);
  const [showMarkers, setShowMarkers] = useState(true);
  
  function SetViewOnClick({ selectedObject}) {
    const map = useMap()
      if(selectedObject){
        console.log(selectedObject)
        map.setView(selectedObject, 15)
        setSelectedObject(null)
      }
    return null;
  }
  
  const basemapsDict = [
    {value: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", name:"По умолчанию"},
    {value: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", name:"Теплая"},
    {value: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", name:"Топографическая "},
    {value: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", name:"Яркая"},
    {value: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png", name:"Светлая"},
    {value: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", name:"Темная"},
  ]
  const handleListItemClick = (obj) => {
    setSelectedObject(obj);
  };
  
  return (
    <div className={classes.map_container + " mb-5"}>
      <MapContainer center={center} zoom={11} style={{height:'100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={basemap}
        />
        <CustomSelect
          className={classes.map__select}
          value={basemap}
          options={basemapsDict}
          onChange={basemap => setBasemap(basemap)}
        />
        <ul className={classes.map__list}>
          {
            objects.map((obj)=>
              <li key={obj.id} onClick={() => handleListItemClick(obj)}>{obj.name}</li>
            )
          }
        </ul>
        <div className={classes.map__toggle}>
          <label htmlFor="markertoggle">Показать маркеры</label>
          <input type="checkbox" name="markertoggle" id="markertoggle"
                 checked={showMarkers}
                 onChange={(e)=>setShowMarkers(e.currentTarget.checked)}/>
        </div>
        <SetViewOnClick selectedObject={selectedObject} />
        {
          showMarkers && objects?.map((obj)=>
            <Marker position={[obj.lat, obj.lon]} key={obj.id}>
              <Popup>
                <div style={{display: 'flex', columnGap: 15, width: '300px'}}>
                  <img height='60' src={obj.img} alt={obj.name}/>
                  <div>{obj.name} <br /> {obj.location}</div>
                </div>
              </Popup>
              <Tooltip>
                {obj.name} <br /> {obj.location}
              </Tooltip>
            </Marker>
          )
        }
      </MapContainer>
    </div>
  );
};

export default MapComponent;