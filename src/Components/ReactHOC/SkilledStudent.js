import React, { Component } from 'react'

const Skilled = (Student,hoursPerDay) => {

    class SkilledStudent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                course: this.props.course,
                hours: 0
            }
        }

        trainingProgress = () => {
            this.setState({
                hours: this.state.hours + hoursPerDay
            })
        }
        render() {
            return <Student hocgrade="Certified"
                hochours={this.state.hours}
                hoctrainingProgress={this.trainingProgress}
                hoccourse={this.state.course}
                {...this.props} //spread operator 
                />
        }
    }
    return SkilledStudent;
}

export default Skilled;