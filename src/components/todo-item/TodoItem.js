import React from 'react';
import User from "../user/User";


export default function TodoItem(props) {
    const {id, text, completed, user} = props;
    return (
        <tr className="item"
            key={id}>
            <td>
                <input
                    type="checkbox"
                    checked={completed}
                    readOnly
                />
            </td>
            <td>
                <label
                    className="label">
                    {text}
                </label>
            </td>
            <td>
                <User
                    key={user.id}
                    name={user.name}
                />
            </td>
        </tr>
    )
}