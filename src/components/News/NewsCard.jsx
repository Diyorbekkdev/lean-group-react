import React from 'react'
import './news.scss'

const NewsCard = ({img, data, info}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <p className="data">{data}</p>
        <p className="info">{info}</p>
    </div>
  )
}

export default NewsCard