import React from 'react';
import '../styles/test.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFirst} from '../actions/testAction';

class Component1 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        if (!this.props.color) {
            return (
                <div
                    className='test-container'
                    style={{
                    backgroundColor: 'blue'
                }}>
                    <span>Component 1!</span>
                    <button onClick={() => this.props.selectFirst()}>Test!</button>
                </div>
            );
        }
        return (
            <div className='test-container' style={this.props.color}>
                Container 1!
                <button onClick={() => this.props.selectFirst()}>Test!</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {color: state.color}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectFirst: selectFirst,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Component1);
