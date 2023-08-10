import React from 'react';

class ChildComponent extends React.Component {
    state = {
        fName: "",
        lName: ""
    }
    render() {
        console.log("Check Pros : ", this.props)

        let { name, age } = this.props
        return (
            <>
                <div>Child Component Name : {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;