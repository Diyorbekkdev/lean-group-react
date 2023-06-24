import React from 'react'
import './primary.scss'


const PrimaryButton = ({text}) => {
  return (
    <button className='primary'>{text}</button>
  )
}

export default PrimaryButton