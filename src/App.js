// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Filter from './components/Filter.js';
import DogsVirtualizedContainer from './containers/DogsVirtualizedContainer';
import './App.css';
import { theme } from './themes/materialStyling.js';
import { initSetDogs } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    // initSetDogs();
  };

  render() {
    const parseData = JSON.parse(JSON.stringify(jsonData));
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
    dogs: state.dogsState.dogs,
  }
};

export default connect(mapStateToProps, { initSetDogs })(App);
