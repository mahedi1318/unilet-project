import React from 'react'

const Images = (props) => {

    let {img} = props

  return (
    <div>
        <img className='' src={img} alt='searchImg' />
    </div>
  )
}

export default Images