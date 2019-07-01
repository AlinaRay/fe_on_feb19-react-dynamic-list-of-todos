export const getAllUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
};