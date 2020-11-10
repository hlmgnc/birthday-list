import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <h4>
              {name}
              <p> {age} years old </p>
            </h4>
          </div>
        )
      })}
    </>
  )
}
export default List
