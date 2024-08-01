import { useState } from "react";
import React from "react";


export default function EditTodo({content,EditTodoFunction}) {
    const [inputValue, setInputValue] = useState(content);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input id="input" value={inputValue} onChange={handleInputChange} />
            <button
                onClick={() => {
                    EditTodoFunction(inputValue);
                }}
            >
                Editing todo
            </button>
        </div>
    );
}

