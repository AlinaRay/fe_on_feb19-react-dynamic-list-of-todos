import React from 'react';
import User from "../user/User";


export default function TodoItem(props) {
    return (
        <tr className="item"
            key={props.id}>
            <td>
                <input
                    type="checkbox"
                    checked={props.completed}
                />
            </td>
            <td>
                <label
                    className="label">
                    {props.text}
                </label>
            </td>
            <td>
                <User
                    key={props.user.id}
                    name={props.user.name}
                />
            </td>
        </tr>
    )
}