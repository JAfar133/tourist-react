import React from "react";
import {HiOutlineMapPin} from "react-icons/hi2";
const TouristObjectComponent = (props) => {
  const object = props.object;
  return (
    <div className={"object"}>
      <div className="object__content">
        <div className="object__image">
          <img src={object.img} alt={object.name}/>
        </div>
        <div className={"object__description"}>
          <h2>{object.name}</h2>
          <p onClick={()=>props.setSelectedObject(object)} className="object__description__location"><HiOutlineMapPin size={26}/>{object.location}</p>
          <p>{object.description}</p>
        </div>
      </div>
      <div className={"object__buttons"}>
        <button
          className={"btn btn-danger"}
          onClick={()=>props.remove(object)}
        >Удалить
        </button>
      </div>
    </div>
  );
};

export default TouristObjectComponent;