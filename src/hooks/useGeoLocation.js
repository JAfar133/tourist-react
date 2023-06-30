import {useEffect, useState} from 'react';

const UseGeoLocation = () => {
  const [location, setLocation] = useState({});
  
  const onSuccess = (location) =>{
    setLocation({
      loaded: true,
      coordinates:{
        lat: location.coords.latitude,
        lon: location.coords.longitude
      }
    })
  };
  const onError = () =>{
    setLocation({
      loaded: true,
      error: {
        code: 2,
        message: "Не удалось запросить местоположение из сетевой службы."
      }
    })
  }
  
  useEffect(()=>{
    if( !("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Геолокация не поддерживается"
      });
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  },[])
  
  return location;
};

export default UseGeoLocation;