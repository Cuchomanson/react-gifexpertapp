import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => { //También se puede pner {props} y luego acceder a cada propiedad sin hacer destructuring
 
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats ]); //Aqui no tenemos acceso al anterior estado (listado de categorías), hay que ponerlo de esta forma. También podría pasarnos las categorias y añadirse todo aqui
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input type="text" value={inputValue} onChange={ handleInputChange }/>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}