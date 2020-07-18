import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //Esto no se hace así a menos que el array nunca vaya a cambiar ya que no se pueden modificar constantes
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories('Batman'); // ** Asi no se agregan los nuevos elementos porque se esta rompiendo el estado anterior. Aqui ya no sería un arreglo sino un string
    //     setCategories([...categories, 'Batman']); //Se utiliza el operador Spred, lo que hace es coger los elementos que ya estában y les agrega uno nuevo
    //     setCategories(['Batman', ...categories]); //Batman aparecería el primero y el resto de elementos detrás

    //     setCategories( cats => [...cats, 'Batman']); //También se puede hacer con una función de callback donde recibimos el ESTADO ANTERIOR
    // }



    //Para renderizar, se necesitan siempre método que retornen algo (por eso un bucle no funciona)
    //Se pueden pasar funciones a otros componentes. En este caso es para añadir valores sobre el listado.
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( category => {
                        return <GifGrid key={category} category = {category} />
                    })
                }
            </ol>
        </>
    );
}
