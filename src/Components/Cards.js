import React from 'react'

function Cards(props) {
  return (
    <div className='cards text-center'>
        <img width={160} src={props.cardImg} alt="" />
        <h5>{props.baslik}</h5>
        <p className='fs-10 text-secondary' >{props.icerik}</p>
    </div>
  )
}

export default Cards