import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowJobs = (status) => {
        this.setState({
            showJobs: status
        })
    }
    handleOnClickDelete = (job) => {
        console.log("handleOnClickDelete : ", job);
        this.props.DeleteJob(job)
    }

    render() {
        console.log("Check Pros : ", this.props)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <button className='btn-show' onClick={() => this.handleShowJobs(true)}>Show</button>
                    :
                    <>
                        <div className='jobList'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => this.handleShowJobs(false)}>Hide</button>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;