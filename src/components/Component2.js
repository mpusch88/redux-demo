import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectSecond} from '../actions/testAction';
import '../styles/test.css'

class Component2 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {        
        if (!this.props.color) {
            return (
                <div
                    className='test-container'
                    style={{
                    backgroundColor: 'orange'
                }}>
                    <span>Component 2!</span>
                    <button onClick={() => this.props.selectSecond()}>Test!</button>
                </div>
            );
        }
        return (
            <div className='test-container' style={this.props.color}>
                Container 2!
                <button onClick={() => this.props.selectSecond()}>Test!</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {color: state.color};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectSecond: selectSecond
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Component2);
