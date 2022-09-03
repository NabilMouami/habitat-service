import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box-h btn-shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <div className='rate'>
            <button className='btn-shadow '>{props.rate}</button>
          </div>
        </div>
        <hr />
        <span>{props.desc}</span>
      </div>
    </>
  )
}

export default Card
