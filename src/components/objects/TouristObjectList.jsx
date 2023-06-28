import React from 'react';
import TouristObjectComponent from "./TouristObjectComponent";
import "../../styles/objects.css"
import CustomSelect from "../UI/CustomSelect";
import Pagination from "./Pagination";
const TouristObjectList = ({objects, title, remove, limit, setLimit, pagesArray, page, setPage, setModal}) => {
  const options = [
    {value: 3, name: 3},
    {value: 4, name: 4},
    {value: 5, name: 5},
    {value: 10, name: 10},
    {value: 15, name: 15},
    {value: -1, name: 'Все'},
  ]
  return (
    <div>
      <h1>{title}</h1>
      <div className="tools">
        <div>
          <label htmlFor="select" className="mx-3">Показать</label>
          <CustomSelect id="select" value={limit} options={options} onChange={setLimit}/>
        </div>
        <Pagination pagesArray={pagesArray} setPages={setPage} page={page}/>
        <button
          className={"btn btn-outline-secondary add-btn"}
          onClick={()=>setModal(true)}
        >
          Добавить место
        </button>
      </div>
      <div className="objects mt-4">
        {objects.map(obj =>
          <TouristObjectComponent
            object = {obj}
            key={obj.id}
            remove={remove}/>
        )}
        
      
      </div>
    </div>
  );
};

export default TouristObjectList;