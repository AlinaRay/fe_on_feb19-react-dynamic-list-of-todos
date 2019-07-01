import React from 'react'
import TodoItem from '../todo-item/TodoItem';

// export const SORT_ORDER_COMPLETED = {name: 'completed', order: true};
export let SORT_ORDER_COMPLETED = {name: 'completed', order: true};
export let SORT_ORDER_TITLE = {name: 'title', order: true};
export let SORT_ORDER_USER = {name: 'user', order: true};

export default function TodoList({todos, onSort}) {
    let elements = todos.map((item) => {
        return (
            <TodoItem key={item.id}
                      completed={item.completed}
                      id={item.id}
                      text={item.title}
                      user={item.user}
            />
        )
    });
    return (
        <table>
            <thead>
            <tr>
                <th onClick={() => onSort(SORT_ORDER_COMPLETED)}>Status</th>
                <th onClick={() => onSort(SORT_ORDER_TITLE)}>Task</th>
                <th onClick={() => onSort(SORT_ORDER_USER)}>User</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>)
}
