import React, {Component} from 'react';
import Login from "./components/Login";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <main className="Main">
          <Login />
        </main>
      </MuiThemeProvider>
    )
  }
}

export default App;