import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    HandleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    HandleAddTodo = () => {
        if (!this.state.title) {
            toast.error("Missing Title");
            return;
        }
        let ToDo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewToDo(ToDo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="Add_Todo">
                <input type="text" value={title} onChange={(event) => this.HandleOnChangeTitle(event)} />
                <button className="Add" onClick={() => this.HandleAddTodo()}>Add</button>
            </div>
        )
    }


}
export default AddToDo;