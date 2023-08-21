import React from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {
    state = {
        ListUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUser } = this.state;
        return (
            <div className="list_User_Container">
                <div className="title">
                    Fetch all list users
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListUser && ListUser.length > 0 &&
                            ListUser.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="Name" onClick={() => this.handleViewDetailUser(item)}>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(ListUser);