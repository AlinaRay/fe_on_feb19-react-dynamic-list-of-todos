export const getAllTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
};
