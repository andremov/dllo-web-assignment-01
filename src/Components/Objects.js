import React, { useState } from "react";

export function Input( { label, type = 'text' } ) {
    const [ isFocused, setFocused ] = useState(false)
    return <div className={'input-parent' + (isFocused ? ' focused' : '')}>
        <span> {label} </span>
        <input type={type} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    </div>
}
