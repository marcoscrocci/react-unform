import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextField } from '@material-ui/core'

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div>
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
            { error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    )
}