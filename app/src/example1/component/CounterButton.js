import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions/Actions';

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(type){
        console.log(this.props);
        if ( type === '+'){
            this.props.actions.increaseCounter()
        }else if ( type === '-'){
            this.props.actions.decreaseCounter()
        }
    }
    render(){
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.handleClick.bind(this, '+')}>+</button>
                <button onClick={this.handleClick.bind(this, '-')}>-</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {count : state };
}
function mapActionToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapActionToProps)(CounterButton);
