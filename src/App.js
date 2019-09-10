import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Filter from './components/Filter.js';
import DogsVirtualizedContainer from './containers/DogsVirtualizedContainer';
import './App.css';
import { theme } from './styles/materialStyling.js';
import { initSetDogs } from './actions';
import { connect } from 'react-redux';
import { fetchDogs } from './adapters/dogsAdapter.js';

class App extends Component {

  state = {
    dogs: []
  }

  componentDidMount() {
    fetchDogs()
    .then(data => {
      this.setState({ dogs: data })
    }, console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NavContainer />
          {/*<DogsVirtualizedContainer dogs={parseData}/> */}
        </MuiThemeProvider>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dogList: state.dogsState.dogList,
  }
};

export default connect(mapStateToProps, { initSetDogs })(App);
