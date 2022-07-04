import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon ball' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories ])
    }

    return (
    <>
        {/*Titulo */}
        <h1>GifExpertApp</h1>

        {/*Input independiente*/}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            />

        {/*Listado de gifs*/}
        
        
        {
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                /> 
            ) )
        }
            {/*<li>ABC</li>*/}
        

            {/*Gifs items */}
    </>
    )
}
