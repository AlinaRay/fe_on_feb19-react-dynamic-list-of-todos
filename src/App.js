import React from 'react';
import {getAllTodos} from './components/util/TodoApi';
import {getAllUsers} from './components/util/UserApi';
import TodoList, {
    SORT_ORDER_COMPLETED, SORT_ORDER_TITLE, SORT_ORDER_USER
} from './components/todo-list/TodoList';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortField: SORT_ORDER_TITLE,
            isLoading: false,
            todoData: [],
        };

        this.handleSort = (sortField) => {
            this.setState(() => {
                return {
                    sortField: sortField
                }
            });
        };
    }

    loadData = async () => {
        this.setState({isLoading: true});
        const [todos, users] = await Promise.all([
            getAllTodos(),
            getAllUsers(),
        ]);
        const items = this.getTodosWithUsers(todos, users);
        this.setState({
            todosData: items,
            isLoading: false
        });
    };

    getTodosWithUsers = (todos, users) => {
        return todos.map(todo => {
            return {
                ...todo,
                user: users.find(user => user.id === todo.userId)
            };
        });
    };

    sortTodos(todos, sortField) {
        let order = sortField.order ? 1 : -1;

        let callbackMap = {
            [SORT_ORDER_TITLE.name]: (a, b) => a.title.localeCompare(b.title) * order,
            [SORT_ORDER_USER.name]: (a, b) => a.user.name.localeCompare(b.user.name) * order,
            [SORT_ORDER_COMPLETED.name]: (a, b) => (a.completed - b.completed) * order
        };
        const callback = callbackMap[sortField.name] || callbackMap.SORT_ORDER_TITLE;
        if (todos) {
            console.log(order);
            sortField.order = !sortField.order;
            return todos.sort(callback);
        }
    }


    render() {
        const {todosData, isLoading, sortField} = this.state;
        const visibleTodos = this.sortTodos(todosData, sortField);
        return (
            <div className="App">
                <h1>React dynamic list of todos</h1>
                {todosData ? (
                    <TodoList
                        todos={visibleTodos}
                        onSort={this.handleSort}
                    />

                ) : (
                    <button onClick={this.loadData}
                            disabled={isLoading}>{isLoading ? "loading"
                        : "details"}
                    </button>

                )}
            </div>
        );
    }
}

