import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading
                ? <p className="animate__animated animate__flash">Cargando <span className="animate__animated animate__shakeX">...</span></p>
                : <div className="card-grid">
                    {images?.length
                        //Si hay resultados
                        ? images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                        //En caso de no haber resultados
                        : <h3>No hay resultados para <u>{category}</u></h3>
                    }
                </div>}
        </>
    )
}


export default GifGrid
