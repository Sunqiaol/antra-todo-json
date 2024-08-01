import { useState } from "react";
import react from "react";


export default function Todo({ addNewTodo }) {
    // controlled component/ two way binding
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input id="input" value={inputValue} onChange={handleInputChange} />
            <button
                onClick={() => {
                    addNewTodo(inputValue);
                }}
            >
                add todo
            </button>
        </div>
    );
}