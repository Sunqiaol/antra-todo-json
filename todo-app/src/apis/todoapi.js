const baseURL = "http://localhost:8080/todos";

const getTodos = () => {

    return fetch(baseURL).then((res) => res.json());
};

const createTodo = (newTodo) => {
    return fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    }).then((res) => res.json());
};

const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

const editTodo = async (id, content) => {
    try {
        const res = await fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}


export { getTodos, createTodo, deleteTodo, editTodo };