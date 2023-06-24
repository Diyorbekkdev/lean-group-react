import React from 'react'
import NewsCard from './NewsCard'
import img from '../../assets/image/news1.png'
import img1 from '../../assets/image/news2.png'
import img3 from '../../assets/image/news3.png'
import './news.scss'
const News = () => {
    const cardData = [
        {
            img: img,
            data: '28.01.2022',
            info: '"ЛеанГрупп" серебряный призер EcoVadis!',
        },
        {
            img: img1,
            data: '21.01.2022',
            info: '"ЛеанГрупп" серебряный призер EcoVadis!'
        },
        {
            img: img3,
            data: '16.12.2021',
            info: 'Туба, как вид упаковки'
        }
    ]

  return (
    <section id='new' className='news'>
        <div className="container">
            <h1 className="title">Новости</h1>
            <div className="card_wrapper">
                {
                    cardData.map((el, index)=>(
                        <NewsCard
                            key={index}
                            img={el.img}
                            data={el.data}
                            info={el.info} 
                        />
                    ))
                }
            </div>
            <div className="see_all">
                <button className='see_btn'>Все новости</button>
            </div>
        </div>
    </section>
  )
}

export default News