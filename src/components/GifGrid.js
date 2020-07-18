//https://developers.giphy.com/docs/api/endpoint/#search
//https://animate.style/

import React  from 'react';
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ( { category }) => {
    
    //Usando nuestro custom Hook. Para renombrar el data como "images"
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id} 
                            {...image}/>
                    ))
                }
            </div>
        </>
    );
}