import React from 'react';
import { getAllTodos } from './components/util/TodoApi';
import { getAllUsers } from './components/util/UserApi';
import TodoList, {
    SORT_ORDER_COMPLETED, SORT_ORDER_TITLE, SORT_ORDER_USER
} from './components/todo-list/TodoList';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortField: SORT_ORDER_TITLE,
            isLoaded: false,
            isLoading: false,
            todoData: [],
        };

        this.handleSort = (sortField) => {
            this.setState({sortField});
        };
    }

    loadData = async  () => {
        this.setState({isLoading: true});
        const [todos, users] =await Promise.all([
            getAllTodos(),
            getAllUsers(),
        ]);
        const items = this.getTodosWithUsers(todos, users);
        this.setState({
            todosData: items
        });
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                isLoading: false,
            });
        }, 1500);
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
        const callbackMap = {
            [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title),
            [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name),
            [SORT_ORDER_COMPLETED]: (a, b) => a.completed - b.completed,
        };
        const callback = callbackMap[sortField] || callbackMap.SORT_ORDER_TITLE;
        console.log(todos);
        if (todos) {
            return todos.sort(callback);
        }
    }


    render() {
        const { todosData, isLoaded,isLoading, sortField } = this.state;
        const visibleTodos = this.sortTodos(todosData, sortField);
        return (
            <div className="App">
                <h1>React dynamic list of todos</h1>
                { isLoaded ? (
                    <TodoList
                        todos={visibleTodos}
                        onSort={this.handleSort}
                    />
                ) : (
                    <button onClick={this.loadData}
                            disabled={isLoading}>{isLoading ?"loading"
                        :  "details"}
                    </button>

                )}
            </div>
        );
    }
}

