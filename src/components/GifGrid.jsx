import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } =  useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                // if isLoading es true haz cargando
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {/* images.map */}
                { 
                    images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image } // Esto es exparcion de properties "recibe del componete gifItem"
                        />
                    )) 
                }
            </div>

        </>
    )
}
