import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

// Un Hook no es nada mas que una función. Las diferencias con un componente son:
// 1º) No se importa React
// 2º) No se tiene porque retornar nada 
// 3º) Los Hooks también pueden tener estado

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Sirve para ejecutar código solo bajo ciertas condiciones. Suele ser util cuando cambia el componente ya que éste se vuelve a ejecutar
    // Es similar al ComponentDidMount(). Solo se ejecutará cuando el componente/hook es renderizado por primera vez
    useEffect( () => {
        getGifs(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            });

    }, [category]);  //Si la category cambia, ejecutará de nuevo esta función (Así también quitamos el warning)

    return state;
}