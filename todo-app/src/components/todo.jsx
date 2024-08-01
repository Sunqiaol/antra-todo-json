import react from "react";


export default function Todo({title,deleteHandler,editHandler}){
    return(
        <div>
            <span>{title}</span>
            <button onClick={deleteHandler}>delete</button>
            <button onClick={editHandler}>Edit</button>
        </div>
    );
}