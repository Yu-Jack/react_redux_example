'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions/AsyncAction';

const AsyncButton = ({onClickHandle, data}) => {
    return (
        <div>
            <button onClick={onClickHandle}>Ajax Call</button>
            <h1>{data}</h1>
        </div>
    )
}

class Async extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <AsyncButton onClickHandle={this.props.actions.fetch} data={this.props.state}></AsyncButton>
    }
}

function mapStateToProps(state) {
    return {state : state};
}
function mapActionToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapActionToProps)(Async);
