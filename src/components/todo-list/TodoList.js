import React from 'react'
import TodoItem from '../todo-item/TodoItem';
// import User from "../user/User";

export const SORT_ORDER_COMPLETED = 'completed';
export const SORT_ORDER_TITLE = 'title';
export const SORT_ORDER_USER = 'user';

export default function TodoList ({todos, onSort}=this.props) {
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
                <th  onClick={() => onSort(SORT_ORDER_TITLE)}>Task</th>
                <th  onClick={() => onSort(SORT_ORDER_USER)}>User</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>)
}
