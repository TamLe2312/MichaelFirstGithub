import React from "react";
import "./ListToDo.scss"
import "./AddToDo.js"
import AddToDo from "./AddToDo.js";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: "1", title: 'Doing Homework' },
            { id: "2", title: 'Do Household Chores' },
            { id: "3", title: 'Find something new' },
        ],
        EditToDo: {

        }
    }
    addNewToDo = (ToDo) => {
        let currentListToDo = this.state.listToDos;
        currentListToDo.push(ToDo);
        this.setState({
            listToDos: currentListToDo
        })
        toast.success("Success");
    }
    handleDeleteToDo = (ToDo) => {
        let currentToDo = this.state.listToDos;
        currentToDo = currentToDo.filter(item => item.id !== ToDo.id)
        this.setState({
            listToDos: currentToDo
        })
        toast.success("Delete Success");
    }
    handleEditToDo = (ToDo) => {
        let { EditToDo, listToDos } = this.state;

        let isEmptyObject = Object.keys(EditToDo).length === 0;

        if (isEmptyObject === false && EditToDo.id === ToDo.id) {
            let listToDosCopy = [...listToDos];
            let objIndex = listToDosCopy.findIndex((item => item.id === ToDo.id));

            listToDosCopy[objIndex].title = EditToDo.title
            this.setState({
                ListToDos: listToDosCopy,
                EditToDo: {}
            })
            toast.success("Update ToDo Success");
            return;
        }
        this.setState({
            EditToDo: ToDo
        })
    }
    handleOnChangeEditToDo = (event) => {
        let editToDoCopy = { ...this.state.EditToDo };
        editToDoCopy.title = event.target.value;
        this.setState({
            EditToDo: editToDoCopy
        })
    }
    render() {
        let { listToDos, EditToDo } = this.state;
        let isEmptyObject = Object.keys(EditToDo).length === 0;
        return (
            <>
                <p>
                    Simple ToDo Apps (TamLe)
                </p>
                <div className="List_Todo_Container">
                    <AddToDo addNewToDo={this.addNewToDo} />
                    <div className="List_ToDo_Content">
                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <div className="List_ToDo_Child" key={item.id}>
                                        {isEmptyObject ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {
                                                    EditToDo.id === item.id ?
                                                        <span>
                                                            {index + 1} - <input value={EditToDo.title} onChange={(event) => this.handleOnChangeEditToDo(event)}></input>
                                                        </span>
                                                        :
                                                        <span>
                                                            {index + 1} - {item.title}
                                                        </span>
                                                }
                                            </>
                                        }
                                        <button className="Edit" onClick={() => this.handleEditToDo(item)}>
                                            {isEmptyObject === false && EditToDo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="Delete" onClick={() => this.handleDeleteToDo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </>
        );
    }
}

export default ListToDo;