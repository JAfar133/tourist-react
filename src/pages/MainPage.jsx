import React, {useCallback, useEffect, useRef, useState} from "react";
import TouristObjectList from "../components/objects/TouristObjectList";
import "../styles/main.css"
import CustomModal from "../components/modals/CustomModal";
import FormObject from "../components/forms/FormObject";
import MapComponent from "../components/map/MapComponent";
import ObjectService from "../services/ObjectService";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../components/objects/Pagination";

function MainPage() {
  
  const [modal, setModal] = useState(false)
  const [objects, setObjects] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalPages, setTotalPages] = useState(0)
  const [selectedObject, setSelectedObject] = useState(null);
  let pagesArray = getPagesArray(totalPages)
  const mapRef = useRef(null)
  const fetchTouristObjects = useCallback(() => {
    const response = ObjectService.getTouristObjects(limit, page);
    setObjects(response.objects);
    setTotalPages(getPageCount(response.totalCount, limit));
  }, [limit, page]);
  
  useEffect(()=>{
    fetchTouristObjects()
  },[fetchTouristObjects, page, limit])
  
  useEffect(()=>{
    if(totalPages > 0 && page>totalPages){
      setPage(page-1)
    }
  }, [page, totalPages])
  
  const createObject = (newObject) => {
    ObjectService.createTouristObject(newObject)
    fetchTouristObjects()
    setModal(false)
  }
  const removeObject = (object) =>{
    ObjectService.deleteTouristObject(object)
    fetchTouristObjects()
  }
  
  useEffect(()=>{
    mapRef.current.focus();
  },[selectedObject])
  
  return (
    <div className={"mt-5"}>
      <div className="app">
        <CustomModal visible={modal} setVisible={setModal}>
          <FormObject create={createObject}/>
        </CustomModal>
        
        {
          objects.length
            ? <TouristObjectList
              pagesArray={pagesArray}
              page={page}
              setPage={setPage}
              setModal={setModal}
              limit={limit}
              setLimit={limit=>setLimit(parseInt(limit))}
              setSelectedObject={setSelectedObject}
              objects={objects}
              remove={removeObject}
              title={"Туристические места Крыма"}
            />
            : <h3>Нет ни одного места</h3>
        }
        <Pagination pagesArray={pagesArray} setPages={setPage} page={page}/>
      </div>
      <div style={{width: '100vw', height: 500, marginBottom: 40 }} ref={mapRef} tabIndex="0">
        <MapComponent
          selectedObject={selectedObject}
          objects={objects}
          showObjectList={true}
          showBasemap={true}
        />
      </div>
    </div>
  );
}

export default MainPage;
