import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setInputValue(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const trimmedInputValue = inputValue.trim()

        if (trimmedInputValue.length) {
            setCategories((cats => [trimmedInputValue, ...cats]))
            setInputValue('')
        } else alert('Por favor, ingresa un texto')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="search" type="text" placeholder="Busca tu gif..." value={inputValue} onChange={handleInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
