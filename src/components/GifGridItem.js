import React from 'react'

const GifGridItem = ({ id, title, url }) => {
    return (
        <figure className="card animate__animated animate__fadeInDown" key={id}>
            <img src={url} alt={title} />
            <figcaption>{title ? title : '--No existe titulo--'}</figcaption>
        </figure>
    )
}

export default GifGridItem
