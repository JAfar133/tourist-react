import React from 'react';
import classes from "./Modal.module.css"
const CustomModal = ({children, visible, setVisible}) => {
  
  const rootClasses = [classes.create_object_modal]
  if(visible) {
    rootClasses.push(classes.modal__active)
  }
  return (
    <div className={rootClasses.join(' ')} onMouseDown={() => setVisible(false)}>
      <div className={classes.my_modal} onMouseDown={(e)=>e.stopPropagation()} >
        <button
          onClick={()=>setVisible(false)}
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{marginLeft: '93%'}}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;