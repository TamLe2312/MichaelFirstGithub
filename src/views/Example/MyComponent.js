import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        fName: "",
        lName: ""
    }
    handleChangeFirstName = (event) => {
        this.setState({
            fName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state['fName']}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state['lName']}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent name={'Michael'} age={'19'} />
            </>
        )
    }
}

export default MyComponent;