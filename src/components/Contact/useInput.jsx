import React, { useState } from 'react'

const useInput = (initialInput) => {

    const [value, setValue] = useState(initialInput);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useInput