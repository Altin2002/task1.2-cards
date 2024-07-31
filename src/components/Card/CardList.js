import React from 'react'
import Card from './Card'
import data from '../../data.js'

const CardList = () => {
    return (
        <div className="card-list">
            {data.map((item, index) => (
                <Card
                    key={index}
                    version={item.version}
                    date={item.date}
                    status={item.status}
                    img={item.img}
                    author={item.author}
                    description={item.description}
                    buttonLabel={item.buttonLabel}
                />
            ))}
        </div>
    )
}

export default CardList