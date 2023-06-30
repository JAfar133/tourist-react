import React from 'react';
import classes from './pagination.module.css'
const Pagination = ({pagesArray, page, setPages}) => {
  return (
    <div className={classes.pagination}>
      {
        pagesArray.map(p=>
          <button
            key={p}
            className={'btn ' + classes.pagination__button +
              (p===page
                ? ' btn-success'
                : ' btn-outline-success')
            }
            onClick={()=>{
              setPages(p)
            }}
          >{p}</button>
        )
      }
    </div>
  );
};

export default Pagination;