import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch } from '../actions';
import SmurfPanel from './smurfForm';
import Smurf from './Smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div className="App">
        <SmurfPanel />
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf smurf={smurf} />
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs : state.smurfs,
    fetchingSmurf : state.fetchingSmurfs,
    error : state.error
  };
};

export default connect(
    mapStateToProps,
    { fetch }
    )(App);
