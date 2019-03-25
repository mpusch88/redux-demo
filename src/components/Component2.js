import React from 'react';
import '../styles/test.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFirst, selectSecond} from '../actions/testAction';

class Component2 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log("Current state of 2 :" + this.props.color);
        if (!this.props.color) {
            return (
                <div
                    className='test-container'
                    style={{
                    backgroundColor: 'yellow'
                }}>
                    Container 2!
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
        selectFirst: selectFirst,
        selectSecond: selectSecond
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Component2);
