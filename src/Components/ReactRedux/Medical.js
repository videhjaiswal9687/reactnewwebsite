import React, { Component } from 'react'
import {connect} from 'react-redux'
//The connect() function connects a React component to a Redux store.
import {buyCOVISHIELD,buyCOVAXIN} from './Action'

class Medical extends Component {
    render() {
        return (
            <div>
                <h1>Medical Component</h1>
                <h1>Number of COVISHIELD :{this.props.numberOfCOVISHIELD}</h1>
                <button onClick={this.props.buyCovishield}>BuyCOVISHIELD</button>
                <h1> Number of COVAXIN :{this.props.numberOfCOVAXIN}</h1>
                <button onClick={this.props.buyCovaxin}>BuyCOVAXIN</button><hr></hr>
            </div>
        )
    }
}
//Single Reducer
// const mapStateToProps = state => {
//     return {
//         numberOfCOVISHIELD:state.numberOfCOVISHIELD,
//         numberOfCOVAXIN:state.numberOfCOVAXIN
//     }
// }

//multiple reducer
const mapStateToProps = state => {
    return {
        numberOfCOVISHIELD:state.covishield.numberOfCOVISHIELD,
        numberOfCOVAXIN:state.covaxin.numberOfCOVAXIN
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCovishield: () => dispatch(buyCOVISHIELD()),
        buyCovaxin: () => dispatch(buyCOVAXIN())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Medical)