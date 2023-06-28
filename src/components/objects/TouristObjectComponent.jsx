import React from "react";
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
          <p>{object.location}</p>
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