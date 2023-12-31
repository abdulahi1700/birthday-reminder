import React from 'react'

function List({item}) {
  return (
    <div>
      {
        item.map((person) =>{
          const {id, name, age, image} = person;
          return(
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} Years</p>
              </div>
            </article>
            
          )
        })
      }
    </div>
  )
}

export default List
