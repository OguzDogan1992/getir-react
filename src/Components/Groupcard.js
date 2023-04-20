import React from 'react'

function Groupcard(props) {
  return (
    <div className='groupCard text-center' >
        <img width={100} src={props.cardImg} alt="" />
        <p>{props.baslik}</p>
    </div>
  )
}

export default Groupcard