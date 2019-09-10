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

class App extends Component {
  componentDidMount() {
    initSetDogs();
  };

  render() {
    // const parseData = JSON.parse(JSON.stringify(jsonData));
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
  return {
    dogsList: state.dogsState.dogs,
  }
};

export default connect(mapStateToProps, { initSetDogs })(App);
