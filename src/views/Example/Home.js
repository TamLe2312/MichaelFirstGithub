import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        /* setTimeout(() => {
            this.props.history.push('./ToDo');
        }, 3000); */
    }
    handleDeleteUser = (user) => {
        console.log("user", user)
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log(this.props.dataRedux);
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello World From Homepage
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span> &nbsp;
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add</button>
                </div>
            </>
        )
    }
}

/* export default withRouter(Home); */

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));