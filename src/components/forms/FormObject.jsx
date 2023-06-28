import React, {useState} from 'react';
import cl from "./form.module.css"

const FormObject = ({create}) => {
  const [touristObject, setTouristObject] = useState({})
  
  const addNewObject = (e)=> {
    e.preventDefault()
    const newObject = {
      ...touristObject
    }
    create(newObject)
  }

  return (
    <div>
      <form action="">
        <h5>Добавьте своё место</h5>
        <div className={cl.form__inputs}>
          <input type="text"
                 onChange={e=> setTouristObject({...touristObject,name: e.target.value})}
                 value={touristObject.name}
                 placeholder="Название"
                 className={"form-control"}
          />
          <input type="text"
                 onChange={e=> setTouristObject({...touristObject,location: e.target.value})}
                 value={touristObject.location}
                 placeholder="Местоположения"
                 className={"form-control"}
          />
          <textarea value={touristObject.description}
                    onChange={e=> setTouristObject({...touristObject,description: e.target.value})}
                    placeholder="Описание"
                    className={"form-control"}
          ></textarea>
          <input
            type="text"
            placeholder="Ссылка на картику"
            name="" id=""
            className={"form-control"}
            onChange={e=> setTouristObject({...touristObject, img: e.target.value})}
          />
          <input
            type="text"
            placeholder="Широта"
            name="" id=""
            className={"form-control"}
            onChange={e=> setTouristObject({...touristObject, lat: e.target.value})}
          />
          <input
            type="text"
            placeholder="Долгота"
            name="" id=""
            className={"form-control"}
            onChange={e=> setTouristObject({...touristObject, lon: e.target.value})}
          />
        </div>
        <button className={"btn btn-outline-primary mt-3"} onClick={addNewObject}>Добавить</button>
      </form>
    </div>
  );
};

export default FormObject;