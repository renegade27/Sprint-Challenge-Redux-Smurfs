import React, {Component} from 'react';
import { post } from '../actions';
import { connect } from 'react-redux';
import './SmurfPanel.css';

class TodoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            age : '',
            height : ''
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    formHandler = e => {
        e.preventDefault();
        this.props.post({
            name : this.state.name,
            age : this.state.age,
            height : this.state.height,
            // id : '$'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6) + '$'
        });
    }

    render() {
        return (
            <div className="smurf-menu">
                <form onSubmit={this.formHandler}>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.inputHandler}
                        placeholder="Smurf Name"
                    />
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.inputHandler}
                        placeholder="Smurf Age"
                    />
                    <input
                        name="height"
                        value={this.state.height}
                        onChange={this.inputHandler}
                        placeholder="Smurf Height"
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }

}


export default connect(null, { post })(TodoPanel);