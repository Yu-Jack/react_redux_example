'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions/Actions';

let nextid = 0;
const AddTodo = ({onClickHandle, text}) => {
    let input;
    return (<div>
        <input ref={(node) => input = node} />
        <button onClick={() => {
            onClickHandle(nextid++, input.value);
            input.value = '';
        }}>{text}</button>
    </div>)
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <AddTodo onClickHandle={this.props.actions.addTodo} text={'Add Todo'}/>
                <ul>
                    {this.props.todolist.map((item) =><li key={item.id}>{item.text}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {todolist : state };
}
function mapActionToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapActionToProps)(TodoList);
