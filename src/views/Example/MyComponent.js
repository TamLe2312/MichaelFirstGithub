import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'Job1', title: 'Chef', salary: '1000' },
            { id: 'Job2', title: 'Developer', salary: '5000' },
            { id: 'Job3', title: 'Tester', salary: '3000' }
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent : ', job)
        let currentJob = this.state.arrJobs
        currentJob.push(job)
        this.setState({
            /* arrJobs: [...this.state.arrJobs, job] */
            arrJobs: currentJob
        })
    }

    DeleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent arrJobs={this.state.arrJobs}
                    DeleteJob={this.DeleteJob}
                />
            </>
        )
    }
}

export default MyComponent;